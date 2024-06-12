import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion"

export default function StackSection() {
    return (
        <section id='stack' className="bg-slate-50  container space-y-6 py-8 md:py-12 lg:py-24 dark:bg-white/5">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                    Habilidades e Tecnologias
                </h2>
                <p className="max-w-[95%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    Especializado nas principais tecnologias e frameworks para desenvolvimento web moderno e eficiente.
                </p>
            </div>

            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
                <div className="relative overflow-hidden rounded-lg border bg-brackgound p-2 lg:bg-background hover:shadow-sm">
                    <div className="felx h-[180px] flex-col justify-between rounded-md p-6">
                        <svg viewBox='0 0 24 24' className='h-12 w-12 fill-current'>
                            <path d='M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z' />
                        </svg>
                        <div className="space-y-2">
                            <h3 className="font-bold">Next.js</h3>
                            <p className="text-sm text-muted-foreground">Framework React poderoso para criar aplicativos web de alto desempenho e escaláveis.</p>
                        </div>
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-lg border bg-brackgound p-2 lg:bg-background hover:shadow-sm">
                    <div className="felx h-[180px] flex-col justify-between rounded-md p-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="h-12 w-12 fill-current">
                            <path d="M 25 12 C 18.507813 12 12.621094 13.359375 8.273438 15.628906 C 3.925781 17.898438 1 21.167969 1 25 C 1 28.832031 3.925781 32.101563 8.273438 34.371094 C 12.621094 36.640625 18.507813 38 25 38 C 31.492188 38 37.378906 36.640625 41.726563 34.371094 C 46.074219 32.101563 49 28.832031 49 25 C 49 21.167969 46.074219 17.898438 41.726563 15.628906 C 37.378906 13.359375 31.492188 12 25 12 Z M 25 14 C 31.210938 14 36.824219 15.324219 40.800781 17.402344 C 44.777344 19.476563 47 22.203125 47 25 C 47 27.796875 44.777344 30.523438 40.800781 32.597656 C 36.824219 34.675781 31.210938 36 25 36 C 18.789063 36 13.175781 34.675781 9.199219 32.597656 C 5.222656 30.523438 3 27.796875 3 25 C 3 22.203125 5.222656 19.476563 9.199219 17.402344 C 13.175781 15.324219 18.789063 14 25 14 Z M 22.507813 16 L 20 28 L 22.625 28 L 23.890625 22 L 25.988281 22 C 26.65625 22 27.101563 22.109375 27.308594 22.332031 C 27.511719 22.554688 27.554688 22.976563 27.4375 23.582031 L 26.480469 28 L 29.144531 28 L 30.183594 23.222656 C 30.40625 22.078125 30.238281 21.238281 29.683594 20.726563 C 29.117188 20.207031 28.121094 20 26.636719 20 L 24.296875 20 L 25.128906 16 Z M 11 20 L 8.972656 31 L 11.617188 31 L 12.144531 28 L 13.792969 28 C 17.238281 28 19.113281 27.203125 19.8125 24.246094 C 20.414063 21.703125 18.875 20 16.332031 20 Z M 32 20 L 29.972656 31 L 32.617188 31 L 33.144531 28 L 34.792969 28 C 38.238281 28 40.113281 27.203125 40.8125 24.246094 C 41.414063 21.703125 39.875 20 37.332031 20 Z M 13.273438 22 L 15.332031 22 C 17.042969 22 17.402344 22.769531 17.3125 23.625 C 17.082031 25.832031 15.707031 26 14.230469 26 L 12.515625 26 Z M 34.273438 22 L 36.332031 22 C 38.042969 22 38.402344 22.769531 38.3125 23.625 C 38.082031 25.832031 36.707031 26 35.230469 26 L 33.515625 26 Z"></path>
                        </svg>
                        <div className="space-y-2">
                            <h3 className="font-bold">PHP</h3>
                            <p className="text-sm text-muted-foreground">Linguagem de script de uso geral, especialmente adequada para desenvolvimento web.</p>
                        </div>
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-lg border bg-brackgound p-2 lg:bg-background hover:shadow-sm">
                    <div className="felx h-[180px] flex-col justify-between rounded-md p-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className='h-12 w-12 fill-current'>
                            <path d="M 31.167969 8 C 30.699219 7.988281 30.289063 8.167969 30.078125 8.6875 C 29.71875 9.558594 30.613281 10.410156 30.933594 10.855469 C 31.15625 11.164063 31.445313 11.511719 31.605469 11.859375 C 31.710938 12.089844 31.726563 12.320313 31.816406 12.5625 C 32.039063 13.160156 32.394531 13.839844 32.679688 14.394531 C 32.824219 14.675781 32.984375 14.96875 33.167969 15.21875 C 33.28125 15.371094 33.472656 15.441406 33.503906 15.675781 C 33.316406 15.941406 33.304688 16.351563 33.199219 16.6875 C 32.722656 18.191406 32.902344 20.0625 33.59375 21.171875 C 33.808594 21.515625 34.3125 22.246094 35 21.96875 C 35.601563 21.722656 35.46875 20.960938 35.640625 20.285156 C 35.679688 20.136719 35.65625 20.023438 35.734375 19.921875 L 35.734375 19.953125 C 35.914063 20.320313 36.097656 20.6875 36.28125 21.050781 C 36.691406 21.707031 37.414063 22.390625 38.023438 22.855469 C 38.339844 23.09375 38.589844 23.507813 39 23.648438 L 39 23.617188 L 38.96875 23.617188 C 38.890625 23.492188 38.765625 23.441406 38.664063 23.34375 C 38.425781 23.109375 38.160156 22.816406 37.964844 22.546875 C 37.40625 21.792969 36.914063 20.964844 36.46875 20.105469 C 36.253906 19.695313 36.066406 19.242188 35.886719 18.824219 C 35.816406 18.660156 35.816406 18.417969 35.671875 18.332031 C 35.472656 18.640625 35.183594 18.886719 35.03125 19.25 C 34.789063 19.828125 34.753906 20.535156 34.664063 21.265625 C 34.609375 21.285156 34.632813 21.269531 34.605469 21.296875 C 34.179688 21.191406 34.027344 20.753906 33.871094 20.378906 C 33.472656 19.429688 33.394531 17.898438 33.75 16.808594 C 33.839844 16.523438 34.25 15.632813 34.085938 15.371094 C 34.007813 15.109375 33.742188 14.960938 33.597656 14.761719 C 33.414063 14.515625 33.234375 14.191406 33.109375 13.90625 C 32.78125 13.164063 32.472656 12.304688 32.125 11.554688 C 31.960938 11.195313 31.683594 10.835938 31.453125 10.515625 C 31.199219 10.164063 30.917969 9.90625 30.71875 9.476563 C 30.652344 9.328125 30.554688 9.085938 30.660156 8.929688 C 30.691406 8.824219 30.738281 8.78125 30.84375 8.746094 C 31.019531 8.609375 31.511719 8.789063 31.699219 8.867188 C 32.1875 9.070313 32.597656 9.265625 33.011719 9.539063 C 33.210938 9.671875 33.410156 9.925781 33.652344 10 L 33.925781 10 C 34.359375 10.097656 34.839844 10.027344 35.238281 10.152344 C 35.949219 10.367188 36.585938 10.703125 37.160156 11.066406 C 38.921875 12.175781 40.363281 13.757813 41.34375 15.644531 C 41.503906 15.949219 41.574219 16.242188 41.714844 16.5625 C 41.992188 17.210938 42.347656 17.882813 42.628906 18.515625 C 42.90625 19.152344 43.179688 19.789063 43.574219 20.316406 C 43.78125 20.59375 44.585938 20.746094 44.949219 20.898438 C 45.203125 21.007813 45.625 21.121094 45.863281 21.265625 C 46.328125 21.542969 46.773438 21.875 47.207031 22.183594 C 47.425781 22.335938 48.089844 22.667969 48.125 22.945313 C 47.050781 22.917969 46.230469 23.015625 45.53125 23.3125 C 45.332031 23.398438 45.011719 23.398438 44.980469 23.648438 C 45.085938 23.761719 45.105469 23.933594 45.191406 24.074219 C 45.359375 24.34375 45.640625 24.707031 45.894531 24.898438 C 46.171875 25.105469 46.453125 25.328125 46.75 25.511719 C 47.273438 25.828125 47.859375 26.011719 48.367188 26.332031 C 48.664063 26.523438 48.964844 26.761719 49.253906 26.972656 C 49.398438 27.082031 49.492188 27.246094 49.679688 27.3125 L 49.679688 27.28125 C 49.582031 27.15625 49.558594 26.984375 49.46875 26.855469 L 49.066406 26.453125 C 48.679688 25.941406 48.1875 25.488281 47.664063 25.113281 C 47.246094 24.8125 46.3125 24.40625 46.140625 23.921875 L 46.109375 23.890625 C 46.402344 23.859375 46.75 23.75 47.023438 23.675781 C 47.484375 23.554688 47.890625 23.585938 48.363281 23.464844 C 48.578125 23.402344 48.792969 23.339844 49.007813 23.28125 L 49.007813 23.15625 C 48.769531 22.914063 48.597656 22.585938 48.335938 22.363281 C 47.652344 21.78125 46.90625 21.199219 46.136719 20.714844 C 45.710938 20.445313 45.183594 20.269531 44.734375 20.042969 C 44.582031 19.964844 44.316406 19.925781 44.214844 19.796875 C 43.976563 19.496094 43.847656 19.113281 43.664063 18.761719 C 43.28125 18.023438 42.90625 17.21875 42.566406 16.441406 C 42.335938 15.914063 42.183594 15.390625 41.894531 14.914063 C 40.507813 12.636719 39.015625 11.257813 36.703125 9.90625 C 36.210938 9.617188 35.621094 9.507813 34.996094 9.359375 C 34.65625 9.335938 34.324219 9.316406 33.984375 9.296875 C 33.78125 9.210938 33.566406 8.960938 33.375 8.835938 C 32.894531 8.535156 31.949219 8.011719 31.167969 8 Z M 34.476563 11.3125 C 34.253906 11.308594 34.09375 11.339844 33.925781 11.375 L 33.925781 11.40625 L 33.957031 11.40625 C 34.0625 11.625 34.253906 11.765625 34.386719 11.953125 C 34.488281 12.167969 34.585938 12.382813 34.6875 12.597656 L 34.71875 12.566406 C 34.90625 12.433594 34.996094 12.21875 34.996094 11.894531 C 34.917969 11.816406 34.90625 11.714844 34.84375 11.621094 C 34.753906 11.492188 34.585938 11.421875 34.476563 11.3125 Z M 1.867188 23.996094 C 1.566406 24.007813 1.238281 24.066406 0.882813 24.179688 C 0.289063 24.359375 -0.00390625 24.714844 -0.00390625 25.4375 L -0.00390625 33 L 2 33 L 2 25.621094 L 4.777344 31.929688 C 5.121094 32.714844 5.589844 32.996094 6.507813 32.996094 C 7.429688 32.996094 7.878906 32.714844 8.222656 31.929688 L 11 25.78125 L 11 33 L 13 33 L 13 25.4375 C 13 24.714844 12.710938 24.359375 12.113281 24.179688 C 10.691406 23.730469 9.734375 24.117188 9.304688 25.089844 L 6.453125 31.503906 L 3.695313 25.089844 C 3.382813 24.359375 2.757813 23.960938 1.867188 23.996094 Z M 26.246094 24 C 25.457031 24 23 24.09375 23 26 L 23 27.234375 C 23 28.109375 23.769531 28.824219 25.4375 29 C 25.625 29.011719 25.8125 29.027344 26 29.027344 C 26 29.027344 27.945313 28.988281 28 29 C 29.125 29 29 29.875 29 30 L 29 31 C 29 31.136719 28.96875 32 27.988281 32 L 23 32 L 23 33 L 28.007813 33 C 28.664063 33 29.300781 32.863281 29.808594 32.625 C 30.652344 32.238281 31 31.714844 31 31.027344 L 31 29.597656 C 31 28.0625 29.09375 28 28 28 L 26 28 C 25.214844 28 25.09375 27.523438 25 27 L 25 26 C 25.09375 25.601563 25.269531 25.0625 25.964844 25 L 31 25 L 31 24 Z M 33.980469 24 C 32.503906 24.203125 31.984375 24.9375 31.984375 26 L 31.984375 31 C 31.984375 31.972656 32.527344 32.558594 33.644531 32.863281 C 34.019531 32.96875 34.359375 33.011719 34.679688 33.011719 L 36.90625 33 L 38.214844 33 L 39.328125 34 L 41.578125 34 L 40.03125 32.605469 C 40.757813 32.304688 40.984375 31.84375 40.984375 30.980469 L 40.984375 26 C 40.984375 24.9375 40.292969 24.203125 38.816406 24 Z M 42 24 L 42 30.957031 C 42 32.164063 42.683594 32.84375 44.492188 32.980469 C 44.660156 32.988281 44.832031 33 45 33 L 50 33 L 50 32 L 45.378906 32 C 44.347656 32 44 31.566406 44 30.949219 L 44 24 Z M 35.171875 25 L 37.746094 25 C 38.425781 25 38.882813 25.546875 38.984375 26 C 38.984375 26 39 30.65625 39 31 C 39 31.34375 38.808594 31.5 38.808594 31.5 L 38.265625 31 L 36 31 L 37.113281 32 L 35.171875 32 C 34.476563 32 34.085938 31.484375 33.984375 31 L 33.984375 26.101563 C 33.984375 25.570313 34.390625 25 35.171875 25 Z M 14 27 C 14.039063 27.039063 14 31.261719 14 31.34375 C 14.015625 32.21875 15.125 32.984375 16.863281 33 L 20 33 L 20 33.066406 C 20 33.253906 20.136719 33.878906 19 34 C 18.988281 34 14.011719 34 14 34 L 14 35 L 19.214844 35 C 20.097656 34.972656 22.011719 34.773438 22 33.242188 C 22 33.214844 22.007813 27 22 27 L 20 27 L 20 32 C 19.96875 32 17.523438 32.007813 17.03125 32 C 16.066406 31.984375 15.984375 31.433594 16 31.222656 L 16 27 Z"></path>
                        </svg>
                        <div className="space-y-2">
                            <h3 className="font-bold">MySQL</h3>
                            <p className="text-sm text-muted-foreground">Sistema de gerenciamento de banco de dados relacional de código aberto amplamente utilizado.</p>
                        </div>
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-lg border bg-brackgound p-2 lg:bg-background hover:shadow-sm">
                    <div className="felx h-[180px] flex-col justify-between rounded-md p-6">
                        <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
                        </svg>
                        <div className="space-y-2">
                            <h3 className="font-bold">HTML5</h3>
                            <p className="text-sm text-muted-foreground">Linguagem de marcação para estruturação e apresentação de conteúdo na web.</p>
                        </div>
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-lg border bg-brackgound p-2 lg:bg-background hover:shadow-sm">
                    <div className="felx h-[180px] flex-col justify-between rounded-md p-6">
                        <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
                        </svg>
                        <div className="space-y-2">
                            <h3 className="font-bold">CSS3</h3>
                            <p className="text-sm text-muted-foreground">Linguagem de estilo utilizada para controlar a apresentação visual de páginas web.</p>
                        </div>
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-lg border bg-brackgound p-2 lg:bg-background hover:shadow-sm">
                    <div className="felx h-[180px] flex-col justify-between rounded-md p-6">
                        <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                            <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                        </svg>
                        <div className="space-y-2">
                            <h3 className="font-bold">Tailwind CSS</h3>
                            <p className="text-sm text-muted-foreground">Framework CSS utilitário para criar interfaces modernas e responsivas rapidamente.</p>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg border bg-brackgound p-2 lg:bg-background hover:shadow-sm">
                    <div className="felx h-[180px] flex-col justify-between rounded-md p-6">
                        <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <div className="space-y-2">
                            <h3 className="font-bold">GitHub</h3>
                            <p className="text-sm text-muted-foreground">Plataforma de hospedagem de código-fonte e colaboração para desenvolvedores.</p>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg border bg-brackgound p-2 lg:bg-background hover:shadow-sm">
                    <div className="felx h-[180px] flex-col justify-between rounded-md p-6">
                        <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                            <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
                        </svg>
                        <div className="space-y-2">
                            <h3 className="font-bold">TypeScript</h3>
                            <p className="text-sm text-muted-foreground">Linguagem de programação tipada que adiciona recursos ao JavaScript.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="mx-auto text-center md:max-w-[58rem]">
                <p className="max-w-[95%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    Especializado nas principais tecnologias e frameworks para desenvolvimento web moderno e eficiente.
                </p>

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="1">
                        <AccordionTrigger>Hel pergunta 01</AccordionTrigger>
                        <AccordionContent className="text-left">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi facilis rem, tempora excepturi repellat doloribus quaerat repudiandae fugit ad laborum odio facere accusamus iste distinctio, quisquam soluta reprehenderit ipsum at! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate dignissimos ipsam dolor eum quasi, soluta molestias laborum vel tempore assumenda dicta delectus optio nostrum sint aperiam? Vitae, sit. Atque, excepturi.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="2">
                        <AccordionTrigger>Hel pergunta 02</AccordionTrigger>
                        <AccordionContent className="text-left">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi facilis rem, tempora excepturi repellat doloribus quaerat repudiandae fugit ad laborum odio facere accusamus iste distinctio, quisquam soluta reprehenderit ipsum at! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate dignissimos ipsam dolor eum quasi, soluta molestias laborum vel tempore assumenda dicta delectus optio nostrum sint aperiam? Vitae, sit. Atque, excepturi.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="3">
                        <AccordionTrigger>Hel pergunta 03</AccordionTrigger>
                        <AccordionContent className="text-left">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi facilis rem, tempora excepturi repellat doloribus quaerat repudiandae fugit ad laborum odio facere accusamus iste distinctio, quisquam soluta reprehenderit ipsum at! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate dignissimos ipsam dolor eum quasi, soluta molestias laborum vel tempore assumenda dicta delectus optio nostrum sint aperiam? Vitae, sit. Atque, excepturi.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="4">
                        <AccordionTrigger>Hel pergunta 04</AccordionTrigger>
                        <AccordionContent className="text-left">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi facilis rem, tempora excepturi repellat doloribus quaerat repudiandae fugit ad laborum odio facere accusamus iste distinctio, quisquam soluta reprehenderit ipsum at! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate dignissimos ipsam dolor eum quasi, soluta molestias laborum vel tempore assumenda dicta delectus optio nostrum sint aperiam? Vitae, sit. Atque, excepturi.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="5">
                        <AccordionTrigger>Hel pergunta 05</AccordionTrigger>
                        <AccordionContent className="text-left">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi facilis rem, tempora excepturi repellat doloribus quaerat repudiandae fugit ad laborum odio facere accusamus iste distinctio, quisquam soluta reprehenderit ipsum at! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate dignissimos ipsam dolor eum quasi, soluta molestias laborum vel tempore assumenda dicta delectus optio nostrum sint aperiam? Vitae, sit. Atque, excepturi.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div> */}
        </section>
    )
}