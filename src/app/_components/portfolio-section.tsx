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
import { motion } from "framer-motion";
import AnimatedTextCharacter from "@/components/animated-text-character";

export default function PortfolioSection() {
    return (

        <section
            id='port'
            className="container flex flex-col md:max-w-[64rem] md:py-12 lg:py-24"
        >
            <div className="relative z-10">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2
                        className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        Projetos em Destaque
                    </h2>
                    <AnimatedTextCharacter />
                </div>
                <div>
                    <PatriItem />


                    <InterSuiteItem />
                </div>
            </div>
        </section>
    );
};


PortfolioSection;

