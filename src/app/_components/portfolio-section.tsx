'use client';
import React from "react";
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
import Image from "next/image";
import { ImageDialog } from "@/components/image-dialog";
import { PatriItem } from "./port/patri";
import { InterSuiteItem } from "./port/intersuite";

export const PortfolioSection = () => {
    return (
        <section
            id='about'
            className="container flex flex-col md:max-w-[64rem] md:py-12 lg:py-24 relative"
        >
            <div className="relative z-10">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        Projetos em Destaque
                    </h2>
                    <p className="max-w-[100%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        Descubra o impacto de soluções web inovadoras e personalizadas.
                    </p>
                </div>
                <div>
                    <PatriItem />

                    <div className="inline-flex items-center justify-center w-full">
                        <hr className="w-full h-px my-8 bg-violet-600 border-0 dark:bg-violet" />
                    </div>

                    <InterSuiteItem />
                </div>
            </div>
        </section>

    );
};


export default PortfolioSection;

