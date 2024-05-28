import { MailCompose } from "./MailCompose.jsx"
const { useState, useEffect } = React


const { Link, NavLink } = ReactRouterDOM

export function MailNavbar({ setIsShowReviewModal, mails }) {



    function starCounter() {
        return mails.filter(mail => mail.isStared === true).length
    }
    function readCounter() {
        return mails.filter(mail => mail.isRead === false).length
    }
    function sentCounter() {
        return mails.filter(mail => mail.isSent === true).filter(mail => mail.isRead === false).length
    }

    return (
        <nav className="navbar">
            <ul className="navbar-nav">
<<<<<<< HEAD
                <li className="nav-item">
                    <Link to='' className="nav-link" onClick={() => setIsShowReviewModal(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" /></svg>
                        <span className="link-text">hello</span>
=======
                <li className="nav-item" onClick={() => setIsShowReviewModal(true)}>
                    <Link to='' className="nav-link">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="##000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" /></svg>
                        <span className="link-text">Compose</span>
>>>>>>> mail

                    </Link>

                </li>
                <li className="nav-item">
<<<<<<< HEAD
                    <Link to='/' className="nav-link">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path d="M121 32C91.6 32 66 52 58.9 80.5L1.9 308.4C.6 313.5 0 318.7 0 323.9V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V323.9c0-5.2-.6-10.4-1.9-15.5l-57-227.9C446 52 420.4 32 391 32H121zm0 64H391l48 192H387.8c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7H195.8c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7H73L121 96z" />
                        </svg>
                        <span className="link-text">hello</span>
=======
                    <Link to='/mail' className="nav-link">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#041E49"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-4.99c0 1.1-.9 2-2 2s-2-.9-2-2H5V5h14v9z" /></svg>
                        <span className="link-text inbox">Inbox</span>
                        <span className="read-count">{readCounter()}</span>
>>>>>>> mail
                    </Link>

                </li>
                <li className="nav-item">
<<<<<<< HEAD
                    <Link to='/' className="nav-link">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path d="M121 32C91.6 32 66 52 58.9 80.5L1.9 308.4C.6 313.5 0 318.7 0 323.9V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V323.9c0-5.2-.6-10.4-1.9-15.5l-57-227.9C446 52 420.4 32 391 32H121zm0 64H391l48 192H387.8c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7H195.8c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7H73L121 96z" />
                        </svg>
                        <span className="link-text">hello</span>
=======
                    <Link to='/mail/stars' className="nav-link">
                        <svg className="star-link" xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill='#444746'><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" /></svg>
                        <span className="link-text">Starred</span>
                        <span className="class-count">{starCounter()}</span>
>>>>>>> mail
                    </Link>

                </li>
                <li className="nav-item">
<<<<<<< HEAD
                    <Link to='/' className="nav-link">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path d="M121 32C91.6 32 66 52 58.9 80.5L1.9 308.4C.6 313.5 0 318.7 0 323.9V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V323.9c0-5.2-.6-10.4-1.9-15.5l-57-227.9C446 52 420.4 32 391 32H121zm0 64H391l48 192H387.8c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7H195.8c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7H73L121 96z" />
                        </svg>
                        <span className="link-text">hello</span>
=======
                    <Link to='/mail/sent' className="nav-link">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#444746"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z" /></svg>
                        <span className="link-text">Sent</span>
                        <span className="class-count">{sentCounter()}</span>

>>>>>>> mail
                    </Link>

                </li>
                <li className="nav-item">
                    <Link to='/' className="nav-link">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#444746"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" /></svg>                        <span className="link-text">hello</span>
                    </Link>

                </li>

            </ul>
        </nav>




    )
}

