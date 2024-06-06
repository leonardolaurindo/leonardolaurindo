'use client';
import React, { useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Hero = () => {
    return (
        <>
            <section id='about' className="container flex flex-col md:max-w-[64rem] md:py-12 lg:py-24">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
                    <div className="lg:col-span-1 lg:pl-10 flex justify-center">
                        <div className="max-w-xs lg:max-w-none">
                            <div className="lg:ml-auto lg:text-right">
                                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                                    <Carousel>
                                        <CarouselContent>
                                            <CarouselItem>Ummmmmmm</CarouselItem>
                                            <CarouselItem><img
                                                src="/portfolio/patri/dashboard.jpg"
                                                alt="hero"
                                                className="max-w-full lg:ml-auto"
                                            /></CarouselItem>
                                            <CarouselItem>.asdasdasd</CarouselItem>
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
                                            <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="lg:col-span-1 lg:order-first lg:row-span-1 text-center md:text-start">
                        <div className="hero-content">
                            <h1 className="mb-6 text-4xl font-bold leading-tight text-slate-800 dark:text-white sm:text-5xl lg:text-6xl">
                                Patrimonio
                            </h1>
                            <p className="mb-8 max-w-[480px] text-base text-slate-600 dark:text-slate-400">
                                Desenvolvemos uma solução eficiente de gestão de patrimônio utilizando as tecnologias mais modernas. Nossa aplicação intuitiva simplifica o controle de ativos, oferecendo recursos como geração automática de QR Codes e rastreabilidade completa do histórico dos itens. A plataforma proporciona praticidade e confiabilidade na administração do patrimônio empresarial, resultado da nossa expertise em desenvolvimento web.
                            </p>
                            <ul className="flex flex-wrap items-center">
                                <li>
                                    <a
                                        href="/#"
                                        className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-600 lg:px-8"
                                    >
                                        Get Started
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/#"
                                        className="inline-flex items-center justify-center px-6 py-3 text-center text-base font-medium text-slate-700 hover:text-primary dark:text-white"
                                    >
                                        <span className="mr-2">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx="12" cy="12" r="12" fill="#3758F9" />
                                                <rect
                                                    x="8"
                                                    y="15"
                                                    width="8"
                                                    height="2"
                                                    fill="white"
                                                />
                                                <rect
                                                    x="11"
                                                    y="8"
                                                    width="2"
                                                    height="4"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M12 14L15 11H9L12 14Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </span>
                                        Download App
                                    </a>
                                </li>
                            </ul>
                            <div className="clients pt-16">
                                <h6 className="mb-4 flex items-center text-xs font-normal text-slate-600 dark:text-slate-400">
                                    Some Of Our Clients
                                    <span className="ml-3 inline-block h-px w-8 bg-slate-600"></span>
                                </h6>

                                <div className="flex items-center space-x-4">
                                    <SingleImage
                                        href="#"
                                        imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
                                    />

                                    <SingleImage
                                        href="#"
                                        imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg"
                                    />

                                    <SingleImage
                                        href="#"
                                        imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

        </>
    );
};


export default Hero;

const SingleImage = ({ href, imgSrc }: any) => {
    return (
        <>
            <a href={href} className="flex w-full items-center justify-center">
                <img src={imgSrc} alt="brand image" className="h-10 w-full" />
            </a>
        </>
    );
};

