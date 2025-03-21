import { prisma } from "@/app/lib/db";
import { LoadingProductCard, ProductCard } from "./ProductCard";
import { Suspense } from "react";

async function getData() {
    const data = await prisma.product.findMany({
        where: {
            status: "published",
            isFeatured: true,
        },
        select: {
            id: true,
            name: true,
            description: true,
            images: true,
            price: true,
        },
        orderBy: {
            createdAt: "desc",
        },
        take: 3,
    });

    return data;
}

export function FeaturedProducts() {

    return (
        <>
            <h2 className="text-2xl font-extrabold tracking-tight ">Featured items</h2>
            <Suspense fallback={<LoadingRows />}>
                <LoadFeaturedProducts />
            </Suspense>
        </>
    )
}

async function LoadFeaturedProducts() {
    const data = await getData();

    return (
        <div className="mt-5 grid sm:grid">
            <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {data.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
        </div>

    )
}

function LoadingRows() {
    return (
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <LoadingProductCard />
            <LoadingProductCard />
            <LoadingProductCard />
        </div>
    )
}