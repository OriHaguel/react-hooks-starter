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
import { DeleteIndex } from "./apps/mail/views/DeleteIndex.jsx"
import { DraftIndex } from "./apps/mail/views/DraftIndex.jsx"
import { BookIndex } from "./pages/BookIndex.jsx"
import { BookAdd } from './pages/BookAdd.jsx'
import { BookDetails } from './pages/BookDetails.jsx'
import { EditBook } from './pages/EditBook.jsx'



export function App() {
    return <Router>
        <section className="app container">
            <AppHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/mail" element={<MailIndex />} />
                <Route path="/mail/:mailId" element={<MailDetails />} />
                <Route path="/note/:noteId" element={<NoteIndex />} />
                <Route path="/note" element={<NoteIndex />} />
                <Route path="/mail/sent" element={<SentIndex />} />
                <Route path="/mail/stars" element={<StarIndex />} />
                <Route path="/mail/deleted" element={<DeleteIndex />} />
                <Route path="/mail/draft" element={<DraftIndex />} />
                <Route path="/books" element={<BookIndex />} />
                <Route path="/books/edit/" element={<EditBook />} />
                <Route path="/books/edit/:bookId" element={<EditBook />} />
                <Route path="/books/:bookId" element={<BookDetails />} />
                <Route path="/books/search/" element={<BookAdd />} />
            </Routes>

        </section>
        <UserMsg />
    </Router>
}
