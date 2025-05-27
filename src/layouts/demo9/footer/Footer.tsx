import { Container } from '@/components/container';
import { generalSettings } from '@/config';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-3 py-5">
          <div className="flex order-2 md:order-1  gap-2 font-normal text-2sm">
            <span className="text-gray-500">{currentYear} &copy;</span>
            <a
              href="https://keenthemes.com"
              target="_blank"
              className="text-gray-600 hover:text-primary"
            >
              Moondev inc
            </a>
          </div>
        
          <div className="flex order-1 md:order-2 gap-2 font-normal text-2sm">
            <a
              href={generalSettings.privacyPolicy}
              target="_blank"
              className="text-gray-600 hover:text-primary"
            >
              Privacy Policy
            </a>
            <a
              href={generalSettings.termsOfService}
              target="_blank"
              className="text-gray-600 hover:text-primary"
            >
              Terms of Service
            </a>
            </div>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
