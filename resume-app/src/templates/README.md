# Adding a New Resume Template

To add a new template to the system:

1. Create a new folder in the `src/templates` directory with your template name (e.g., "Professional")

2. Inside this folder, create two required files:
   - `index.js`: The React component for your template, this is used to structure the layout using the provided components. You should aim to implement all modules, and these can be optionally disabled by the user.
   - `styles.js`: The styles for your template

3. In `index.js`, follow this structure:
   ```javascript
   import React from 'react';
   import ContactInformation from "@/components/ContactInformation";
   import Education from "@/components/Education";
   import Socials from "@/components/Socials";
   import WorkExperience from "@/components/WorkExperience";
   import Skills from "@/components/Skills";
   import CoursesAndTraining from "@/components/CoursesAndTraining";
   import Projects from "@/components/Projects";
   import Hobbies from "@/components/Hobbies";
   import { styles } from './styles';

   export default function YourTemplateName({ data }) {
     return (
       // Your template JSX here
     );
   }
   ```
4. In `styles.js`, define your template specific styles. See existing templates for examples:
    ```javascript
    export const styles = {
    // Your styles here
    };
    ```
5. Add your new template into the registry `src/templates/index.js`:
    ```javascript
    yourTemplateId: {
        name: "Your Template Name",
        component: () => import('./YourTemplateFolder').then(mod => mod.default),
        description: "A brief description of your template",
        thumbnail: "/thumbnails/yourtemplate.png", // Add a thumbnail image
    }
    ```
6. Create a thumbnail preview image (400x600px recommended) and add it to public/thumbnails/

7. Your template will now be registered and should be dynamically added to the template selector.