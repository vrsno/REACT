export const getImages = (size)=>{
    const images = ["/bun.svg",
        "/deno.svg",
        "/docker.svg",
        "/redis.svg",
        "/vitejs.svg",
        "/github.svg",
        "/javascript.svg",
        "/supabase.svg",
        "/svelte.svg",
        "/vscode.svg"];

    const newImages = images.slice(0, size)

    return newImages
      .flatMap((item) => [`1|${item}`, `2|${item}`])
      .sort(() => Math.random() - 0.5);

}