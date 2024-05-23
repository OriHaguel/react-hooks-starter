export function NoteList() {
    return <section className="list-section">
        <div className="list-bar">
            <div className="list-notes list-child">
                <svg>  </svg>
                <span>תזכורות</span>
                <i className="fa-solid fa-1x fa-trash"></i>
            </div>

            <div className="list-reminders list-child">
                <svg>  </svg>
                <span>הערות</span>
                <i className="fa-solid fa-1x fa-trash"></i>
            </div>


            <div className="list-edit-tags list-child">
                <svg>  </svg>
                <span>עריכת תוויות</span>
                <i className="fa-solid fa-1x fa-trash"></i>
            </div>
            <div className="list-archive list-child">
                <svg>  </svg>
                <span>אשפה</span>
                <i className="fa-solid fa-1x fa-trash"></i>
            </div>
            <div className="list-trash list-child">
                <svg>  </svg>
                <span>ארכיון</span>
                <i className="fa-solid fa-1x fa-trash"></i>
            </div>




        </div>

        <div>

        </div>
    </section>
}
