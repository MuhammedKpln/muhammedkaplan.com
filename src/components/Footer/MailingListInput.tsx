import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";

export default function MailingListInput() {
  const [email, setEmail] = useState("");

  const subscribe = useCallback(
    async (e) => {
      e.preventDefault();

      const formData = new FormData();
      formData.append("email", email);

      const promise = () => {
        return new Promise(async (resolve, reject) => {
          const response = await fetch("/api/add-mailing-list", {
            method: "post",
            body: formData,
          });

          if (response.ok) {
            return resolve("ok");
          }

          return reject();
        });
      };

      await toast.promise(promise(), {
        success: "Tack! Du har lyckats prenumerera på min e-postlista!",
        error: "Hoppsan! Prova igen senare",
        loading: "Laddar...",
      });
    },
    [email]
  );

  return (
    <>
      <input
        className="w-full lg:w-[400px] h-10 rounded-full px-4 bg-white/10 text-sm lg:text-base"
        type="text"
        placeholder="Din e-postadress"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <button
        onClick={subscribe}
        className="h-10 rounded-full transition-colors whitespace-nowrap text-sm lg:text-base bg-yellow-700 px-8 hover:bg-yellow-600 w-full lg:w-auto"
      >
        Prenumerera
      </button>
    </>
  );
}
