# Music Library Application

This application is a simple Angular project that demonstrates how to build a music library using Angular. The application consists of two components, an album list component that displays a list of albums, and an album detail component that displays the details of a selected album. The application also uses a resolver to fetch the album and music list details before the album detail component is displayed.

## Getting Started

To get started with this project, you will need to have Node.js and Angular CLI installed on your computer.

Clone the repository:

    git clone https://github.com/icode247/my-music-library
    
Install dependencies:

    cd my-music-library
    npm install
    
Run the application:

    ng serve
    
Open your browser and navigate to `http://localhost:4200/` to see the application running.
Using the Application

The home page of the application displays a list of albums that are hard-coded in the albums.json file in the `src/assets` folder. Clicking on an album will take you to the album detail page where you can view the album details and the list of songs in the album.

The application uses Angular routing to navigate between the different pages. The routing configuration can be found in the `app-routing.module.ts` file in the `src/app` folder.

To add new albums to the application, you can simply edit the `albums.json` file or create a new JSON file and update the `album.service.ts` file in the `src/app/services` folder to fetch the data from the new file.

## Conclusion

This is a simple Angular project that demonstrates how to build a music library using Angular. The application is easy to customize and can be extended to include more features and functionality. If you have any questions or feedback, feel free to open an issue or submit a pull request on the project's GitHub repository.
