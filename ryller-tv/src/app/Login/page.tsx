import Form from '../shared/components/Form/Form';

export default function telaLogin() {
    return (
        <div className="relative bg-black">
            <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black/10 to-black" />
            <div className="relative">
                <Form />
            </div>
        </div>
    );
}
