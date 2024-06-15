import { motion } from "framer-motion";

export default function AnimatedTextCharacter() {
    const text = "Descubra o impacto de soluções web inovadoras e personalizadas.".split(" ");

    return (
        <div className="App" >
            {
                text.map((el, i) => (
                    <motion.span
                        initial={{ opacity: 0.0, y: 40 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 0.55,
                            delay: i / 5,
                        }}
                        key={i}
                        className="max-w-[100%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        {el}{" "}
                    </motion.span>
                ))}
        </div>
    );
}