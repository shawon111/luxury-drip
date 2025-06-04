import { FaWhatsapp } from "react-icons/fa6";

const WhatsAppBtn = () => {
    return (
        <div>
            <a
                href="https://wa.me/393508301446"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-[10px] right-[10px] z-50 bg-green-500 p-4 rounded-full shadow-lg"
            >
                <FaWhatsapp className="text-3xl text-white" />
            </a>
        </div>
    );
};

export default WhatsAppBtn;