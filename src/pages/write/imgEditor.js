import { useState } from "react";

export default function ImageEditor({ value, index, remove }) {
    console.log("ImageEditor");

    const [base64Image, setBase64Image] = useState("");

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setBase64Image(reader.result); // Update state with Base64
        };
        reader.onerror = (error) => console.error("Error reading file: ", error);
    };

    return (
        <div>
            <button className="border border-red-400 p-2 rounded" onClick={() => remove(index)}>
                Remove
            </button>{" "}
            {index}

            <div className="border border-green-200 p-4">
                <input type="file" accept="image/png, image/jpeg, image/jpg" onChange={handleImageUpload} />
                {base64Image && <img src={base64Image} className="mt-2 w-32 h-32 object-cover border border-gray-300" alt="Preview" />}
            </div>
        </div>
    );
}
