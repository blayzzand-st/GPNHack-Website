import React from "react";
import ReactDOM from "react-dom/client";

import "./css/main.css"

const userAvatar = require("./img/user_avatar.png");
const sunIcon = require("./img/sun.png");
const ringIcon = require("./img/ring.png");
const questionIcon = require("./img/question.png");
const downloadIcon = require("./img/download.png");
const leftArrowIcon = require("./img/left_arrow.png");
const rightArrowIcon = require("./img/right_arrow.png");
const againIcon = require("./img/again.png");
const doneIcon = require("./img/done.png");

interface ThemeProps {
    title: string
}

interface CardProps {
    title: string
    tag_1: string
    tag_2: string
    description: string
    button_text: string
    max_tasks: string
    completed_tasks: string
}

function App() {
    return (
        <div>
            <Header />
            <div className="main">
                <RecommendedThemes title="Рекомендуемые темы"/>
                <MainThemes title="Путь Front End Developer"/>
                <OtherThemes  title="Каталог тем"/>
            </div>
        </div>
    );
}

const Header = () => {
    return (
        <header>
            <p className="title part_1">Портал</p>
            <p className="title part_2">Разработчика</p>
            <p>Мое обучение</p>
            <p className="unselected">Задачи</p>
            <img id="ring" src={ringIcon} alt="Notifications" width={10} height={13}/>
            <img id="help" src={questionIcon} alt="Help" width={14} height={14}/>
            <img id="theme" src={sunIcon} alt="Change Theme" width={16} height={16}/>
            <div className="line"></div>
            <User />
        </header>
    )
}

const RecommendedThemes: React.FC<ThemeProps> = ({title}) => {
    return (
        <section className="recommendedTheme">
            <p className="themeTitle">{title}</p>
            <Card title="Начало работы" tag_1="Для новичка" tag_2="Основы работы"
                  description="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"
            button_text="Продолжить тему" max_tasks="10" completed_tasks="8" />
            <button className="sub-btn btn-show-more">Показать еще
                <img src={downloadIcon} alt="download"/></button>
            <div className="line line-1"></div>
            <div className="line line-2"></div>
        </section>
    )
}

const MainThemes: React.FC<ThemeProps> = ({title}) => {
    return (
        <section className="mainTheme">
            <div className="mainThemeWrap">
                <p className="themeTitle">{title}</p>
                <button className="sub-btn hide-passed">Скрыть пройденные</button>
                <button className="sub-btn back"><img src={leftArrowIcon} alt="back"
                width={12.42} height={11.42} /></button>
                <button className="sub-btn forward"><img src={rightArrowIcon} alt="forward"
                width={12.42} height={11.42} /></button>
            </div>

            <div className="mainCardsDisplay">
                <div className="card-welcome">
                    <Card title="Добро пожаловать!" tag_1="Для новичка" tag_2="Основы работы"
                          description="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"
                          button_text="Пройти заново" max_tasks="10" completed_tasks="10" />
                    <img id="again-icon" src={againIcon} alt="again" width={14} height={15}/>
                    <div className="done"><img src={doneIcon} alt="done ^^" width={12.95} height={10.91}/>
                    </div>
                </div>
                <div className="card-start-working">
                    <Card title="Начало работы" tag_1="Для новичка" tag_2="Основы работы"
                          description="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"
                          button_text="Продолжить тему" max_tasks="10" completed_tasks="8"/>
                </div>
                <div className="card-introduction">
                    <Card title="Введение в рабочую среду" tag_1="Для новичка" tag_2="Основы работы"
                          description="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"
                          button_text="Начать" max_tasks="10" completed_tasks="" />
                </div>
            </div>
        </section>
    )
}

const OtherThemes: React.FC<ThemeProps> = ({title}) => {
    return (
        <section className="otherTheme">
            <p className="themeTitle">{title}</p>
            <div className="choice-group">
                <div className="choice-item" id="all">Все</div>
                <div className="choice-item" id="working-space">Рабочая среда</div>
                <div className="divider"></div>
                <div className="choice-item" id="libraries">Библиотеки</div>
                <div className="divider"></div>
                <div className="choice-item" id="passed">Пройденные</div>
                <div className="divider"></div>
                <div className="choice-item" id="not-passed">Не пройденные</div>
            </div>
            <div className="otherThemeDisplay">
                <div id="start-working">
                    <Card title="Начало работы" tag_1="Для новичка" tag_2="Основы работы"
                          description="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"
                          button_text="Продолжить" max_tasks="10" completed_tasks="8" />
                </div>
                <div id="working-with-libraries">
                    <Card title="Работа с библиотеками GPN" tag_1="Профессионалу" tag_2="Библиотеки"
                          description="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"
                          button_text="Начать" max_tasks="255" completed_tasks="" />
                </div>
                <div id="introduction">
                    <Card title="Введение в рабочую среду" tag_1="Профессионалу" tag_2="Библиотеки"
                          description="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"
                          button_text="Начать" max_tasks="10" completed_tasks="" />
                </div>
                <div id="start-working-2">
                    <Card title="Начало работы" tag_1="Для новичка" tag_2="Основы работы"
                          description="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"
                          button_text="Продолжить тему" max_tasks="10" completed_tasks="3" />
                </div>
                <div id="working-with-libraries-2">
                    <Card title="Работа с библиотеками GPN" tag_1="Профессионалу" tag_2="Библиотеки"
                          description="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"
                          button_text="Начать" max_tasks="255" completed_tasks="" />
                </div>
                <div id="introduction-2">
                    <Card title="Введение в рабочую среду" tag_1="Профессионалу" tag_2="Библиотеки"
                          description="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"
                          button_text="Начать" max_tasks="10" completed_tasks="" />
                </div>
            </div>
        </section>
    )
}

const Card: React.FC<CardProps> = ({title, tag_1, tag_2, description,
                                   button_text, completed_tasks, max_tasks}) => {
    return (
        <article className="card">
            <p className="cardTitle">{title}</p>
            <div className="tags">
                <p id="tag-1">{tag_1}</p>
                <div className="circle"></div>
                <p id="tag-2">{tag_2}</p>
            </div>
            <p className="description">{description}</p>
            <div className="card-bottom-wrapper">
                <button className="button">{button_text}</button>
                <p className="tasks">{completed_tasks}<span className="separator">/</span>{max_tasks}</p>
                <p className="tasks-text">заданий</p>
                <div className="progress-bar"></div>
                <div className="progress-bar-after"></div>
            </div>
        </article>
    )
}

const User = () => {
    return (
        <section className="user">
            <img src={userAvatar} alt="User Avatar" width="32" height="32"/>
            <p>Михаил Романов</p>
        </section>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);