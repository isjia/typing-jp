import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
    Input,
    Row,
    Col,
    Statistic,
    Button,
    Spin,
    Popover,
    InputNumber,
    Collapse,
    Tag,
} from 'antd';
import { ReloadOutlined } from '@ant-design/icons';

import './Fingers.less';
import { storeConnect, MapState, MapDispatch } from '@/store/index';
import wordTool, { WordType } from '@/utils/wordTool';
import { Word } from '@/words';

const { Countdown } = Statistic;
const { Panel } = Collapse;

const getCountdownStr = (value: number) => {
    const minutes = Math.floor(value / 60);
    const secs = value % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
};

const Fingers: React.FC<MapState & MapDispatch> = (props) => {
    const [loading, setLoading] = useState(true);
    const [deadline, setDeadline] = useState(0);
    const [actingWordIndex, setActingWordIndex] = useState(0);
    const [wordArr, setWordArr] = useState<Array<WordType & { isCorrect: boolean | null }>>([]);
    const [wordInput, setWordInput] = useState('');
    const [typingEnd, setTypingEnd] = useState(false);
    const wordsBaseRef = useRef(
        wordTool.getWords(props.$state.root.wordsMode, props.$state.root.customerWords)
    );
    const mainWindowEl = useRef(null);
    const mainInputEl = useRef(null);
    const wordIndexRef = useRef(0); // WORDS数组的下标
    const lineIndexLockRef = useRef(false); // 是否设置过第二行开头元素的下标
    const nextLineStartIndexRef = useRef(0);
    const lineCountRef = useRef(0);
    const timeStartRef = useRef(false);
    const oneLineHeightRef = useRef(53);
    const keystrokeCountRef = useRef(0);
    const countdownTimeRef = useRef(parseInt(props.$state.root.countdownTime, 10));
    const [deadlineText, setDeadlineText] = useState(getCountdownStr(countdownTimeRef.current));
    const [isHideCharacter, setIsHideCharacter] = useState(true);
    // isjia add: show acting word text
    const [showActingWordText, setShowActingWordText] = useState(false);
    const typingResultRef = useRef({
        wpm: 0,
        correct: 0,
        wrong: 0,
        inputWordArr: [] as any[],
    });

    const countDownStart = () => {
        const time = countdownTimeRef.current;
        setDeadline(Date.now() + time * 1000);
    };
    const pushWordToArr = (isInit?: boolean) => {
        setWordArr((arr) => {
            const wordsTemp = [...wordsBaseRef.current];
            if (isInit) {
                wordIndexRef.current = 0;
                return [{ isCorrect: null, ...wordsTemp[wordIndexRef.current] }];
            } else {
                wordIndexRef.current += 1;
                if (wordIndexRef.current >= wordsTemp.length) wordIndexRef.current = 0;
                return arr.concat({ isCorrect: null, ...wordsTemp[wordIndexRef.current] });
            }
        });
    };
    // rmv: 重写了，对比 text 或者 label 任意一个正确都可以
    // const checkInputVal = (inputArr: string[], target: string) => {
    //     let isCorrect = true;
    //     inputArr.forEach((char, index) => {
    //         if (target.charAt(index) !== char) {
    //             isCorrect = false;
    //         }
    //     });
    //     return isCorrect;
    // };

    //isjia: 重写，对比 text 或者 label 任意一个正确都可以
    const checkInputVal = (inputArr: string[], target: Word) => {
        const inputText = inputArr.join('');
        if (inputText === target.text) {
            console.log('correct text: ', inputText, ', ', target.text);
            return true;
        }
        if (inputText === target.label) {
            console.log('correct label: ', inputText, ', ', target.label);
            return true;
        }
        return false;
    };
    const inputCountdownTime = (value?: number | string) => {
        if (value && /^\d+$/g.test(String(value))) {
            countdownTimeRef.current = Number(value);
            setDeadlineText(getCountdownStr(Number(value)));
        }
    };
    const onCountdownFinish = () => {
        if (timeStartRef.current) {
            const inputWordArr = typingResultRef.current.inputWordArr;
            const correctCount = inputWordArr.filter((word: any) => word.isCorrect === true).length;
            typingResultRef.current = {
                wpm: Math.round(correctCount / (countdownTimeRef.current / 60)),
                correct: correctCount,
                wrong: inputWordArr.filter((word: any) => word.isCorrect === false).length,
                inputWordArr,
            };
            setTypingEnd(true);
            console.log(wordArr);
        }
    };
    const reloadBtn = useCallback(() => {
        lineIndexLockRef.current = false;
        lineCountRef.current = 0;
        timeStartRef.current = false;
        keystrokeCountRef.current = 0;
        setTypingEnd(false);
        setWordInput('');
        setActingWordIndex(0);
        wordsBaseRef.current = wordTool.shuffle(wordsBaseRef.current);
        pushWordToArr(true);
        setTimeout(() => {
            (mainInputEl.current as any).focus();
            typingResultRef.current = {
                wpm: 0,
                correct: 0,
                wrong: 0,
                inputWordArr: [] as any[],
            };
        }, 10);
    }, []);

    const mainInputKeyUp = (evt: React.KeyboardEvent) => {
        //isjia: shift+space 展示或隐藏当前单词的假名
        if (evt.shiftKey && evt.keyCode === 32) {
            console.log('shift + space: ', evt.keyCode, showActingWordText);
            const currentState = showActingWordText;
            setShowActingWordText(!currentState);
            // console.log(showActingWordText.current);
        }

        //isjia: shift+enter 弹窗提示单词翻译。
        if (evt.shiftKey && evt.keyCode === 13) {
            console.log('shift + enter: ', evt.keyCode);
            alert(wordArr[actingWordIndex].trans);
        }
        // ctrl + enter reload 一组新的单词
        if (evt.ctrlKey && evt.keyCode === 13) reloadBtn();
        if (typingEnd) return;
        keystrokeCountRef.current += 1;
        console.log('keystrokeCountRef.current: ', keystrokeCountRef.current);
    };

    useEffect(() => {
        if (mainWindowEl) {
            const wordContainerRow = (mainWindowEl.current as any).lastElementChild;
            if (!wordContainerRow || !wordContainerRow.lastElementChild) return;
            const outterScrollTop = (mainWindowEl.current as any).scrollTop;
            Array.from(wordContainerRow.children).forEach((child: any, index: number) => {
                oneLineHeightRef.current = child.offsetHeight;
                const childTopToParent = child.offsetTop - wordContainerRow.offsetTop;
                const showsSecLine = oneLineHeightRef.current + outterScrollTop;
                const isNextLineCheck = // 判断是不是显示的两行中的第二行，存在小数公差
                    showsSecLine - 5 < childTopToParent && childTopToParent < showsSecLine + 5;
                if (!lineIndexLockRef.current && isNextLineCheck) {
                    nextLineStartIndexRef.current = index;
                    lineIndexLockRef.current = true;
                }
            });
            if (
                wordContainerRow.lastElementChild.offsetTop -
                    wordContainerRow.offsetTop -
                    outterScrollTop <
                oneLineHeightRef.current * 3 + 1
            ) {
                pushWordToArr();
            }
        }
    }, [wordArr.length]);

    useEffect(() => {
        if (typingEnd) return;
        if (wordInput === '') {
            setWordArr((arr) => {
                const tempArr = [...arr];
                if (tempArr[actingWordIndex]) {
                    tempArr[actingWordIndex].isCorrect = null;
                }
                return tempArr;
            });
            return;
        }
        //isay: commented if (!timeStartRef.current) countDownStart();
        timeStartRef.current = true;
        const inputArr = Array.from(wordInput.trim());
        if (wordInput[wordInput.length - 1] === ' ' || wordInput[wordInput.length - 1] === '　') {
            setWordInput('');
            if (inputArr.length === 0) return;
            setWordArr((arr) => {
                let tempArr = [...arr];
                const targetWord = tempArr[actingWordIndex];
                const isCorrect = checkInputVal(inputArr, targetWord);
                tempArr[actingWordIndex].isCorrect = isCorrect;
                //isjia: 修改判定条件，省略长度判定 isCorrect && inputArr.length === targetWord.text.length;

                typingResultRef.current.inputWordArr.push(
                    Object.assign({ input: inputArr.join('') }, tempArr[actingWordIndex])
                );
                return tempArr;
            });
            setActingWordIndex(actingWordIndex + 1);
            if (actingWordIndex + 1 === nextLineStartIndexRef.current) {
                lineCountRef.current += 1;
                (mainWindowEl.current as any).scrollTop =
                    oneLineHeightRef.current * lineCountRef.current;
                lineIndexLockRef.current = false;
                pushWordToArr();
            }
        } else {
            setWordArr((arr) => {
                const tempArr = [...arr];
                const targetWord = tempArr[actingWordIndex];
                const isCorrect = checkInputVal(inputArr, targetWord);
                tempArr[actingWordIndex].isCorrect = isCorrect === false ? false : null;
                return tempArr;
            });
        }
    }, [actingWordIndex, typingEnd, wordInput]);

    useEffect(() => {
        wordsBaseRef.current = wordTool.getWords(
            props.$state.root.wordsMode,
            props.$state.root.customerWords
        );
        setTimeout(() => {
            reloadBtn();
            setLoading(false);
        }, 1000);
    }, [props.$state.root.wordsMode, props.$state.root.customerWords, reloadBtn]);

    return (
        <div className="home">
            <Row justify="center" align="middle">
                <Col flex="450px" className={`home-scale-box-${props.$state.root.uiScale}`}>
                    <div className="hide-control">
                        <Button
                            tabIndex={-1}
                            type="link"
                            onClick={() => setIsHideCharacter((v) => !v)}
                        >
                            {isHideCharacter ? '显示' : '隐藏'}假名
                        </Button>
                    </div>
                    <div className="home-show-main">
                        {typingEnd && <div className="type-end"></div>}
                        <Spin spinning={loading} delay={50} wrapperClassName="loading-wrapper">
                            <div className="home-show-main-window" ref={mainWindowEl}>
                                <Row gutter={12}>
                                    {wordArr.map((item, index) => (
                                        <Col
                                            key={index}
                                            className={`home-show-main-window-item ${
                                                item.isCorrect === true ? 'correct' : ''
                                            } ${item.isCorrect === false ? 'incorrect' : ''}`}
                                        >
                                            <div
                                                className={`home-show-main-window--label ${
                                                    actingWordIndex === index ? 'acting' : ''
                                                }`}
                                            >
                                                {item.label}
                                            </div>
                                            <div
                                                className={`home-show-main-window--text ${
                                                    isHideCharacter ? 'hide' : ''
                                                }
                                                ${
                                                    actingWordIndex === index && showActingWordText
                                                        ? 'show-text'
                                                        : ''
                                                }
                                                `}
                                            >
                                                {item.text}
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Spin>
                    </div>
                    <Row justify="space-between" align="middle" gutter={0}>
                        <Col flex="285px">
                            <Input
                                className="home-input"
                                ref={mainInputEl}
                                value={wordInput}
                                onChange={(evt) => {
                                    setWordInput(evt.target.value);
                                }}
                                onKeyUp={mainInputKeyUp}
                            ></Input>
                        </Col>
                        <Col flex="90px">
                            <Popover
                                content={
                                    <div>
                                        <InputNumber
                                            defaultValue={countdownTimeRef.current}
                                            onChange={inputCountdownTime}
                                        ></InputNumber>
                                        <span>秒</span>
                                    </div>
                                }
                                onVisibleChange={() =>
                                    props.$dispatch(
                                        'setCountdownTime',
                                        String(countdownTimeRef.current)
                                    )
                                }
                                overlayClassName="home-countdown-popover"
                                placement="bottom"
                                title=""
                                trigger="click"
                            >
                                <div className="home-countdown">
                                    <Countdown
                                        className="home-countdown-main"
                                        value={deadline}
                                        format="m:ss"
                                        onFinish={onCountdownFinish}
                                    ></Countdown>
                                    <div
                                        className={`home-countdown-placeholder ${
                                            timeStartRef.current ? 'time-run' : ''
                                        }`}
                                    >
                                        {deadlineText}
                                    </div>
                                </div>
                            </Popover>
                        </Col>
                        <Col flex="50px">
                            <Button
                                className="home-reload-btn"
                                onClick={reloadBtn}
                                type="primary"
                                icon={<ReloadOutlined />}
                            />
                        </Col>
                    </Row>
                    <div className="home-type-result-container">
                        {typingEnd && (
                            <Row className="home-type-result">
                                <Col span={24}>
                                    <div className="result-wpm">
                                        {typingResultRef.current.wpm}
                                        WPM
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className="result-title">正确</div>
                                </Col>
                                <Col span={12}>
                                    <div className="result-numbers correct">
                                        {typingResultRef.current.correct}
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className="result-title">错误</div>
                                </Col>
                                <Col span={12}>
                                    <div className="result-numbers wrong">
                                        {typingResultRef.current.wrong}
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className="result-title">按键总数</div>
                                </Col>
                                <Col span={12}>
                                    <div className="result-numbers">
                                        {keystrokeCountRef.current}
                                    </div>
                                </Col>
                                <Col span={24}>
                                    <Collapse ghost={true} className="type-resule-collapse">
                                        <Panel header="展开此次输入" key="1">
                                            {typingResultRef.current.inputWordArr.map((w, wi) => (
                                                <Tag
                                                    color={w.isCorrect ? 'success' : 'error'}
                                                    key={wi}
                                                >
                                                    <div>{w.label}</div>
                                                    <div>{w.input}</div>
                                                </Tag>
                                            ))}
                                        </Panel>
                                    </Collapse>
                                </Col>
                            </Row>
                        )}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default storeConnect(Fingers);
