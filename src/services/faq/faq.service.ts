import { FAQPageType } from "@/types/faq.types";
import { StrapiResultType } from "@/types/strapi.types";
import { strapiGet } from "../common/strapi.service";

class FAQsAPI {
    getFAQPages = async (): Promise<StrapiResultType<FAQPageType>> =>
        strapiGet(`/faq-pages`);
}

const faqsAPI = new FAQsAPI();
export default faqsAPI;