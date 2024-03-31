import Form from "../../../components/shared/Form";

export default function page() {
    return (
        <section>
            <h2 className="text-center w-11/12 md:w-1/2 mx-auto">Get in Touch</h2>
            <p className="text-center text-muted-foreground w-11/12 md:w-1/2 mx-auto">Feel free to drop me a message anytime.</p>
            <Form />
        </section>
    );
}
