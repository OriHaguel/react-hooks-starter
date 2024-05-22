const { useParams, useNavigate, Link, useSearchParams } = ReactRouterDOM

export function MailPreview({ mail }) {
    const navigate = useNavigate()
    return <React.Fragment>
        <td className="input-td"><input type="checkbox" /></td>
        <td onClick={() => navigate(`/mail/${mail.id}`)}>
            <h1>{mail.subject}</h1>
            <h1>{mail.body}</h1>
        </td>

    </React.Fragment>

}