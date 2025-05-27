import Document, { Html, Head, Main, NextScript } from "next/document";
export default class CustomDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
						integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
						crossOrigin="anonymous"
						referrerPolicy="no-referrer"
					/>
					<link
						rel="stylesheet"
						href="https://unpkg.com/aos@next/dist/aos.css"
					/>

					<link
						rel="stylesheet"
						href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
						integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
						crossOrigin="anonymous"
					/>
					<script
						src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
						integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
						crossOrigin="anonymous"></script>
					<script
						src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
						integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
						crossOrigin="anonymous"></script>
					<script
						src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
						integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
						crossOrigin="anonymous"></script>
				</Head>
				<body>
					<Main />
					<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

					<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
					<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" />
					<script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>


					<script>AOS.init();</script>
				</body>
				<NextScript />
			</Html>
		);
	}
}
