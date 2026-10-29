import Contact from "@/components/Contact";

const info = {
    phone: "558-1461",
    email: "trust.lennie@gmail.com",
    discord: "@papifidds"
}

export default function About() {
    return (
        <main className="max-w-4x1 mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-gray-700">
                I'm just a cool lil dude who explodes of happiness when I see my cat. Also I'm learning software development so that's cool.
            </p>
            <Contact 
                phone = {info.phone}
                email = {info.email}
                discord = {info.discord}
                 />
        </main>
    );
}