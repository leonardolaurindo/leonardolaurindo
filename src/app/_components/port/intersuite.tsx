import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { ImageDialog } from "@/components/image-dialog"

export const InterSuiteItem = () => {
    return (
        <>
            <div className="relative isolate">
                <defs>
                    <pattern id="1d4240dd-898f-445f-932d-e2872fd12de3" width="200" height="200" x="50%" y="0" patternUnits="userSpaceOnUse">
                        <path d="M.5 200V.5H200" fill="none"></path>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth="0" fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)"></rect>
                <div className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl" aria-hidden="true">
                    <div className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-violet-500 to-violet-950 opacity-10 dark:opacity-20" ></div>
                </div>


                <div className="pt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto-1f]">

                    <div className="lg:order-first lg:pr-20 flex justify-center">
                        <div className="max-w-xs lg:max-w-none">
                            <div className="lg:ml-auto lg:text-right">
                                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                                    <Carousel>
                                        <CarouselContent>
                                            <CarouselItem>
                                                <ImageDialog imgSrc="/portfolio/intersuite/header.webp" alt="hero" />
                                            </CarouselItem>
                                            <CarouselItem>
                                                <ImageDialog imgSrc="/portfolio/intersuite/canais_section.webp" alt="hero" />
                                            </CarouselItem>
                                            <CarouselItem>
                                                <ImageDialog imgSrc="/portfolio/intersuite/contact_section.webp" alt="hero" />
                                            </CarouselItem>
                                            <CarouselItem>
                                                <ImageDialog imgSrc="/portfolio/intersuite/other_page.webp" alt="hero" />
                                            </CarouselItem>
                                            <CarouselItem>
                                                <ImageDialog imgSrc="/portfolio/intersuite/reunion_page.webp" alt="hero" />
                                            </CarouselItem>
                                        </CarouselContent>
                                        <CarouselPrevious />
                                        <CarouselNext />
                                    </Carousel>


                                    <span className="absolute -bottom-8 -left-8 z-[-1]">
                                        <svg
                                            width="93"
                                            height="93"
                                            viewBox="0 0 93 93"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="2.5" cy="2.5" r="2.5" fill="currentColor" />
                                            <circle cx="2.5" cy="24.5" r="2.5" fill="currentColor" />
                                            <circle cx="2.5" cy="46.5" r="2.5" fill="currentColor" />
                                            <circle cx="2.5" cy="68.5" r="2.5" fill="currentColor" />
                                            <circle cx="2.5" cy="90.5" r="2.5" fill="currentColor" />
                                            <circle cx="24.5" cy="2.5" r="2.5" fill="currentColor" />
                                            <circle cx="24.5" cy="24.5" r="2.5" fill="currentColor" />
                                            <circle cx="24.5" cy="46.5" r="2.5" fill="currentColor" />
                                            <circle cx="24.5" cy="68.5" r="2.5" fill="currentColor" />
                                            <circle cx="24.5" cy="90.5" r="2.5" fill="currentColor" />
                                            <circle cx="46.5" cy="2.5" r="2.5" fill="currentColor" />
                                            <circle cx="46.5" cy="24.5" r="2.5" fill="currentColor" />
                                            <circle cx="46.5" cy="46.5" r="2.5" fill="currentColor" />
                                            <circle cx="46.5" cy="68.5" r="2.5" fill="currentColor" />
                                            <circle cx="46.5" cy="90.5" r="2.5" fill="currentColor" />
                                            <circle cx="68.5" cy="2.5" r="2.5" fill="currentColor" />
                                            <circle cx="68.5" cy="24.5" r="2.5" fill="currentColor" />
                                            <circle cx="68.5" cy="46.5" r="2.5" fill="currentColor" />
                                            <circle cx="68.5" cy="68.5" r="2.5" fill="currentColor" />
                                            <circle cx="68.5" cy="90.5" r="2.5" fill="currentColor" />
                                            <circle cx="90.5" cy="2.5" r="2.5" fill="currentColor" />
                                            <circle cx="90.5" cy="24.5" r="2.5" fill="currentColor" />
                                            <circle cx="90.5" cy="46.5" r="2.5" fill="currentColor" />
                                            <circle cx="90.5" cy="68.5" r="2.5" fill="currentColor" />
                                            <circle cx="90.5" cy="90.5" r="2.5" fill="currentColor" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="pt-10 flex justify-center">

                                    <div className="relative inline-flex  group">
                                        <div
                                            className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-purple-400 via-purple-800 to-purple-400 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                                        </div>
                                        <a href="#" title="Get quote now"
                                            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-zinc-600 dark:text-zinc-50 transition-all duration-200 bg-background  font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                            role="button">Contato
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" lg:row-span-2 text-center md:text-start">
                        <div className="hero-content">
                            <h1 className="mb-6 text-4xl font-bold leading-tight text-slate-800 dark:text-white lg:text-4xl ">
                                Landing Page InterSuite
                            </h1>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <a target="_blank" href="https://intersuite.com.br" className="text-sm flex m-4 p-1.5 rounded-lg bg-slate-50/35 hover:bg-slate-50/65 dark:text-black dark:bg-white/85 dark:hover:bg-white/55">
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30" className="mr-1">
                                                <path d="M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z"></path>
                                            </svg>
                                            Acessar
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        Acessar: https://intersuite.com.br
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <p className="mb-8 max-w-[480px] text-base text-slate-600 dark:text-slate-400 text-justify">
                                Desenvolvida com as melhores práticas de conversão, a Landing Page do InterSuite apresenta um design atraente e responsivo. Com sections estratégicas, como canais de comunicação, formulário de contato e depoimentos, a página oferece uma experiência envolvente aos visitantes. Projetada para garantir performance e velocidade excepcionais, a Landing Page do InterSuite é uma solução eficaz para apresentar o produto e engajar o público-alvo.
                            </p>



                            <Accordion type="single" collapsible className="relative z-10">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Header Impactante e Navegação Intuitiva</AccordionTrigger>
                                    <AccordionContent>
                                        O header da Landing Page do InterSuite é estrategicamente projetado para cativar os visitantes desde o primeiro instante. Com um efeito de digitação envolvente, ele destaca as principais qualidades do sistema, criando uma impressão duradoura. O menu flutuante complementa a experiência, oferecendo uma navegação intuitiva e acessível em todas as seções da página. Essa combinação permite que os visitantes explorem facilmente os recursos e benefícios do InterSuite.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Credibilidade Reforçada por Provas Sociais</AccordionTrigger>
                                    <AccordionContent>
                                        Para estabelecer a credibilidade e demonstrar a eficácia do InterSuite, a Landing Page inclui sections dedicadas a provas sociais e depoimentos impactantes. A section de provas apresenta métricas impressionantes, como o volume de atendimentos realizados, a diversidade de nichos atendidos, a quantidade de mensagens processadas e o número de empresas que confiam na plataforma. Esses dados concretos transmitem confiança aos visitantes. Além disso, a section de depoimentos exibe relatos autênticos de clientes satisfeitos, compartilhando suas experiências positivas com o InterSuite por meio de um slider envolvente.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Formulário de Contato Estratégico</AccordionTrigger>
                                    <AccordionContent>
                                        A Landing Page do InterSuite apresenta um formulário de contato estrategicamente posicionado para facilitar a interação entre os visitantes interessados e a equipe de atendimento. Localizado em uma seção de destaque, o formulário é projetado para ser intuitivo e de fácil preenchimento. Com campos essenciais, como nome, email e telefone, ele permite que os visitantes enviem suas mensagens de forma rápida e conveniente. Ao enviar o formulário, um atendente dedicado entra em contato prontamente, fornecendo um atendimento personalizado e eficiente. Essa abordagem proativa demonstra o compromisso do InterSuite em oferecer uma experiência excepcional ao cliente desde o primeiro contato.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
                <div className="pt-5 pb-10">
                    <h6 className="mb-4 flex items-center text-md font-normal text-zinc-600 dark:text-zinc-400">
                        Tecnologias utilizadas
                        <span className="ml-3 inline-block h-px w-10 bg-zinc-600"></span>
                    </h6>

                    <div className="flex items-center justify-center space-x-4 gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="55" height="55" viewBox="0 0 50 50" className="fill-zinc-500 transition hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-300">
                            <path d="M 45.273438 2.324219 C 45.085938 2.117188 44.816406 2 44.535156 2 L 5.464844 2 C 5.183594 2 4.914063 2.117188 4.726563 2.324219 C 4.535156 2.53125 4.441406 2.808594 4.46875 3.089844 L 7.988281 42.515625 C 8.023438 42.929688 8.3125 43.273438 8.710938 43.390625 L 24.722656 47.960938 C 24.808594 47.988281 24.902344 48 24.996094 48 C 25.089844 48 25.179688 47.988281 25.269531 47.960938 L 41.292969 43.390625 C 41.691406 43.273438 41.976563 42.929688 42.015625 42.515625 L 45.53125 3.089844 C 45.558594 2.808594 45.464844 2.53125 45.273438 2.324219 Z M 36.847656 15.917969 L 18.035156 15.917969 L 18.484375 21.007813 L 36.394531 21.007813 L 35.050781 36.050781 L 24.992188 39.089844 L 24.894531 39.058594 L 14.953125 36.046875 L 14.410156 29.917969 L 19.28125 29.917969 L 19.492188 32.296875 L 25.050781 33.460938 L 30.507813 32.296875 L 31.089844 25.859375 L 14.046875 25.859375 L 12.722656 11.054688 L 37.28125 11.054688 Z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="55" height="55" viewBox="0 0 50 50" className="fill-zinc-500 transition hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-300">
                            <path d="M 43.335938 4 L 6.667969 4 C 5.195313 4 4 5.195313 4 6.667969 L 4 43.332031 C 4 44.804688 5.195313 46 6.667969 46 L 43.332031 46 C 44.804688 46 46 44.804688 46 43.335938 L 46 6.667969 C 46 5.195313 44.804688 4 43.335938 4 Z M 27 36.183594 C 27 40.179688 24.65625 42 21.234375 42 C 18.140625 42 15.910156 39.925781 15 38 L 18.144531 36.097656 C 18.75 37.171875 19.671875 38 21 38 C 22.269531 38 23 37.503906 23 35.574219 L 23 23 L 27 23 Z M 35.675781 42 C 32.132813 42 30.121094 40.214844 29 38 L 32 36 C 32.816406 37.335938 33.707031 38.613281 35.589844 38.613281 C 37.171875 38.613281 38 37.824219 38 36.730469 C 38 35.425781 37.140625 34.960938 35.402344 34.199219 L 34.449219 33.789063 C 31.695313 32.617188 29.863281 31.148438 29.863281 28.039063 C 29.863281 25.179688 32.046875 23 35.453125 23 C 37.878906 23 39.621094 23.84375 40.878906 26.054688 L 37.910156 27.964844 C 37.253906 26.789063 36.550781 26.328125 35.453125 26.328125 C 34.335938 26.328125 33.628906 27.039063 33.628906 27.964844 C 33.628906 29.109375 34.335938 29.570313 35.972656 30.28125 L 36.925781 30.691406 C 40.171875 32.078125 42 33.496094 42 36.683594 C 42 40.117188 39.300781 42 35.675781 42 Z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="65" height="65" viewBox="0 0 50 50" className="fill-zinc-500 transition hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-300">
                            <path d="M 25 12 C 18.507813 12 12.621094 13.359375 8.273438 15.628906 C 3.925781 17.898438 1 21.167969 1 25 C 1 28.832031 3.925781 32.101563 8.273438 34.371094 C 12.621094 36.640625 18.507813 38 25 38 C 31.492188 38 37.378906 36.640625 41.726563 34.371094 C 46.074219 32.101563 49 28.832031 49 25 C 49 21.167969 46.074219 17.898438 41.726563 15.628906 C 37.378906 13.359375 31.492188 12 25 12 Z M 25 14 C 31.210938 14 36.824219 15.324219 40.800781 17.402344 C 44.777344 19.476563 47 22.203125 47 25 C 47 27.796875 44.777344 30.523438 40.800781 32.597656 C 36.824219 34.675781 31.210938 36 25 36 C 18.789063 36 13.175781 34.675781 9.199219 32.597656 C 5.222656 30.523438 3 27.796875 3 25 C 3 22.203125 5.222656 19.476563 9.199219 17.402344 C 13.175781 15.324219 18.789063 14 25 14 Z M 22.507813 16 L 20 28 L 22.625 28 L 23.890625 22 L 25.988281 22 C 26.65625 22 27.101563 22.109375 27.308594 22.332031 C 27.511719 22.554688 27.554688 22.976563 27.4375 23.582031 L 26.480469 28 L 29.144531 28 L 30.183594 23.222656 C 30.40625 22.078125 30.238281 21.238281 29.683594 20.726563 C 29.117188 20.207031 28.121094 20 26.636719 20 L 24.296875 20 L 25.128906 16 Z M 11 20 L 8.972656 31 L 11.617188 31 L 12.144531 28 L 13.792969 28 C 17.238281 28 19.113281 27.203125 19.8125 24.246094 C 20.414063 21.703125 18.875 20 16.332031 20 Z M 32 20 L 29.972656 31 L 32.617188 31 L 33.144531 28 L 34.792969 28 C 38.238281 28 40.113281 27.203125 40.8125 24.246094 C 41.414063 21.703125 39.875 20 37.332031 20 Z M 13.273438 22 L 15.332031 22 C 17.042969 22 17.402344 22.769531 17.3125 23.625 C 17.082031 25.832031 15.707031 26 14.230469 26 L 12.515625 26 Z M 34.273438 22 L 36.332031 22 C 38.042969 22 38.402344 22.769531 38.3125 23.625 C 38.082031 25.832031 36.707031 26 35.230469 26 L 33.515625 26 Z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="65" height="65" viewBox="0 0 50 50" className="fill-zinc-500 transition hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-300">
                            <path fillRule="evenodd" d="M 42 6 L 39 40 L 25 44 L 11 40 L 8 6 Z M 16.800781 28 L 20.800781 28 L 20.898438 30.5 L 25 31.898438 L 29.101563 30.5 L 29.398438 26 L 20.601563 26 L 20.398438 22 L 29.601563 22 L 29.898438 18 L 16.101563 18 L 15.800781 14 L 34.101563 14 L 33.601563 22 L 32.898438 33.5 L 25 36.101563 L 17.101563 33.5 Z"></path>
                        </svg>

                    </div>
                </div>
            </div>
        </>
    )
}