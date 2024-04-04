import Form from "./Form";

export default function Contact({ className, title, subTitle }) {
    return (
        <section className={className}>
            <h2 className="text-center w-11/12 md:w-1/2 mx-auto">{title || 'Get in Touch'}</h2>
            <p className="text-center text-muted-foreground w-11/12 md:w-1/2 mx-auto">{subTitle || 'Feel free to drop me a message anytime.'}</p>
            <Form />
        </section>
    )
}
