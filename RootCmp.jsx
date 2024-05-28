const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from "./cmps/AppHeader.jsx"
import { About } from "./views/About.jsx"
import { Home } from "./views/Home.jsx"
import { MailIndex } from "./apps/mail/views/MailIndex.jsx"
import { NoteIndex } from "./apps/note/views/NoteIndex.jsx"
import { emailService } from "./apps/mail/services/mail.service.js"
import { MailDetails } from "./apps/mail/views/MailDetails.jsx"
import { UserMsg } from "./cmps/UserMsg.jsx"
import { SentIndex } from "./apps/mail/views/SentIndex.jsx"
import { StarIndex } from "./apps/mail/views/StarIndex.jsx"





export function App() {
    return <Router>
        <section className="app">
            <AppHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/mail" element={<MailIndex />} />
                <Route path="/mail/:mailId" element={<MailDetails />} />
                <Route path="/note" element={<NoteIndex />} />
                <Route path="/note/:noteId" element={<NoteIndex />} />
                <Route path="/mail/sent" element={<SentIndex />} />
                <Route path="/mail/stars" element={<StarIndex />} />
            </Routes>
        </section>
        <UserMsg />
    </Router>
}
