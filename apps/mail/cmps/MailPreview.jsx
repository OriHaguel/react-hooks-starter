

export function MailPreview({ mail }) {
    return <React.Fragment>
        <td><input type="checkbox" /></td>
        <td>{mail.subject}</td>
        <td>{mail.body}</td>
    </React.Fragment>

}