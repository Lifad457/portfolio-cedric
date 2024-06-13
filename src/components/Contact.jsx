import { Contact, ContactSection, Wrapper } from '../styles/contact.css';
import { Email, Phone } from '../styles/icons.css';

export default function ContactComponent() {
	return (
		<Contact id='contact'>
			<h1>Contact</h1>
			<ContactSection>
				<Wrapper>
					<Phone />
					<span>06 63 03 17 90</span>
				</Wrapper>
				<Wrapper>
					<Email />
					<span>cedric.bison@gmail.com</span>
				</Wrapper>
			</ContactSection>
		</Contact>
	);
}
