import { CategoriesSelection } from "../components/storefront/CategorySelection";
import { FeaturedProducts } from "../components/storefront/FeaturedProduct";
import { Hero } from "../components/storefront/Hero";
import { Navbar } from "../components/storefront/Navbar";

export default function IndexPage() {
    return (
        <div>
            <Hero />
            <CategoriesSelection />
            <FeaturedProducts /> 
        </div>
    );
}