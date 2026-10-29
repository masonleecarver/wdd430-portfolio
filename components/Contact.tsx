interface ContactProps{
    phone: string;
    email: string;
    discord: string;
}

export default function Contact({phone, email, discord} : ContactProps) {
    return (
        <section className="container mx-auto px-4">
            <div className="rouded-lg border p-6">
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-gray-700">Phone: {phone}</p>
                <p className="text-gray-700">Email: {email}</p>
                <p className="text-gray-700">Discord Username: {discord}</p>
            </div>    
        </section>
    );
}