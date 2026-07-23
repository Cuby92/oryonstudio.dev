import styles from './page.module.scss';
import Slide from '@/components/Slide/Slide';
import { useTranslations } from 'next-intl';
import FlareBtn from '@/components/links/FlareBtn';
import LiquidPlasma from '@/components/shaders/LiquidPlasma';

const s = styles;

function Contact() {
    const t = useTranslations('contact.content');

    return (
        <Slide className={s.Hero}>
            <LiquidPlasma />
            <div className={s.content}>
                <h1>Let's Build Something Out of This World</h1>
                <p className={s.lead}>Fill out the form below or send a direct email. We respond to qualified inqueries within 24 hours.</p>
                <nav>
                    <FlareBtn className={s.btn} href="#q1" prior={true}>Fill Out the Form</FlareBtn>
                    <FlareBtn className={s.btn} href="#contact-info">Skip to contact info</FlareBtn>
                </nav>
            </div>
        </Slide>
    );
}

export default Contact;