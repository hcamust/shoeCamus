import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";

interface iAppProps {
    images: string[],
}

export function ImageSlider({ images }: iAppProps) {
    return (
        <div className="grid gap-6 md:gap-3 items-start">
            <div className="relative overflow-hidden rounded-lg">
                <Image width={600} height={600} src={images[0]} alt="Product Image"
                className="object-cover w-[600px] h-[600px]" />

            <div className="absolute inset-0 flex items-center justify-between px-4">
                <Button variant="ghost" size="icon">
                    <ChevronLeft className="w-6 h-6"/>
                </Button>
            </div>

            </div>
        </div>
    )
}