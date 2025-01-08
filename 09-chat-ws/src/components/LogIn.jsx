import { supabase } from "../supabaseClient";

export function LogIn() {
  const handlelogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return (
    <section className="login">
      <button onClick={handlelogin}>Iniciar</button>
    </section>
  );
}
