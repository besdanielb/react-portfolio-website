# One-Page Portfolio Website using ReactJS and MaterialUI with multi-language support v1.0

This portfolio template was made using ReactJS version 16 and MaterialUI components, such as Grid and Typography. You can read more about it [here](https://material-ui.com/). <br/> <br/>
The goal of this portfolio is to be as clean as possible, with the least amount of text and more image focused, which can make the website look more modern and with a minimal design. <br/><br/>
There's a deployed demo available at [this url](https://musing-jones-42c2fb.netlify.app/). <br/><br/>

We used the `Live Scss compiler` extension for VSCode that helps you to compile the SCSS files to CSS files at realtime with live browser reload with some improvements on the CSS side for better browser compatibility. The components are linking to the CSS files, but you can edit the SCSS and use the extension if you are familiar with SCSS.



## Template Customisation

This template can be easilly editable. The code is divided by components, located inside `src/app/components/` directory. Every component represents a website page (aboutMe component is the about me page, etc). <br>

### Favicon and Website title - Index.html file

The Favicon is the icon, on the left of the title, that is visible on the browser tab when the website is open. <br>
To change this icon, just paste the icon inside the `public` folder and delete the existing one, names `favicon.png`. If you keep the same file name the icon will be replaced. <br>
To change the website title, open the `index.html` file inside the `public` folder. There you can edit the title (`<title>` html element) and other meta data for the website. 

### Images
The sample images used on the template were downloaded from [Unsplash](www.unsplash.com), there you can find copyright free images. <br><br>
For every page you can alter the images and the text. Every image in the template can be found inside the directory `src/app/images` and in two formats, `jpg` and `webp`. Webp format is a modern image format created by Google, that provides superior compression for images on the web, which makes the website lighter. Although, this format is not supported in some broswers like Safari, yet, and that's why we also included the JPG format and we let the browser decide which format to choose. <br><br>
If you want to edit the background images for every page, just open the .scss file for that component and, under the `section#id` selector, you'll see 2 background properties, one for the webp image, and the other for the jpg format. In the background property definition, you'll see an `url(...)` which contains the path to the image, by editing this path you should be able to change to the image you want. <br><br>
To change an image inside a JS component, for example, the profile image inside the About Me page, theres is a `<picture>` html element which contains 2 image sources, the jpg and the webp, there you can change the urls.<br> <br>
To change the images on the Gallery carousel slider, edit the config array inside the file `galleryData.js` located on `src/app/components/gallery/` directory. Here you can change the image path and the title of the image. <br><br>
Same with the Portfolio carousel slider, edit the config array inside the file `portfolioData.js` located on `src/app/components/portfolio/` directory. Here you can change the image path, the title and description of the image (which is shown when hovering the image) and en external link (opens when clicking the image).

### Text and Translations

Almost every text that is present on the website is located on the `src/app/locales` folder. The sample template version contains 2 files, the English `.en.json` and the Portuguese `.pt.json` translations. As an example, if you change the contents of `aboutMe.description.p1` you'll change the first paragraph of the About Me page. Keep in mind that you should change every translate file when adding or editing any translations. The translation keys need to be the same in all the translation files and they are being called on the components by the translate function `t(key)`. <br><br>

To add a new language you need to:
* Add a new file on the `src/app/locales` folder with the new translations;
* Open the `src/i18n.js` file, import the translations file you created and update the resources object with the new imported translation file. Here you can also change the default language, by changing the `fallbackLng` property;
* Now, the new translations will be available on all the components. You just need to update the Languages split button on the navigation bar to have the new language available. For that, go to the `navBar` component, find the `getCurrentLanguageLabel` function and add a new if statement for the new language. The return of this function is the label that is going to show on the button when the language is selected. Next, find the div `<div className="language-button-container">` and add a new `<MenuItem>` element with your language. This will add a new button on the dropdown and change the language when the user clicks on it, by calling the `changeLanguage(lang)` function.

### Code formatting

The code was formatted using ESLint and Prettier. Some ESlint configs can be found on the `.eslint.js` file on the `src/` directory.

## Available Scripts to Install and Run the Website

In the project directory, you can run:

### `npm install`

This command installs a package, and any packages that it depends on, to be able to run the project. 

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run format` && `npm run lint`

You can use these commands at the same time, the first to format the code using Prettier and the second to check the code quality using ESLint.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Support

If you need help with anything else, feel free to send me an email at:  `besdanielb@gmail.com`
