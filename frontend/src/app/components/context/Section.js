import Heading from "./Heading";

export default function Section() {
    console.log('Render section');
    return (
        <section className="section">
            <Heading >
                heading with level
            </Heading>
        </section>
    );
}