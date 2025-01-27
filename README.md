##### workshop-task-6

# Workshop 6 : Text and Language

[Website Link] https://josephinepark.github.io/workshop-task-6/

1. RiTa.tokenize()<Br>
2. RiTa.rhymesSync()<Br>
3. RiTa.isVerb()

## Task
[] Create an interactive nonsense poem generater using the rita.js library.<br>
[] Use at least three different functions from the rita.js library to process the user's input.<br>

## Notes from the workshop video
<img width="951" alt="image" src="https://github.com/user-attachments/assets/d7e8bcdb-5a02-4d59-8cc1-9a931cde5d88" /><br>
<br>
Rita - separate a string, a series of characters into individual words.
<br>
https://rednoise.org/rita/
<br>
https://github.com/dhowe/ritajs#with-p5js
<br>
<Br>
<Br>
<img width="571" alt="image" src="https://github.com/user-attachments/assets/7660a180-e8a1-446b-a954-a0b9e7d9c922" />
<br>
If you already have a sketch, simply add <script src="https://unpkg.com/rita"></script> to your index.html to include RiTa.
<Br>
<Br>
<img width="446" alt="image" src="https://github.com/user-attachments/assets/139259e6-ce1a-4bc3-95b5-7d9c57bff212" />
<img width="700" alt="image" src="https://github.com/user-attachments/assets/0ab19eee-06ed-4b4b-9ee9-9665f1715eb5" />







## Progress (Experimentation and problem solving)
For this workshop, I needed to download the fonts from the internet. I have downloaded two different types of fonts from https://www.dafont.com/. 
<br>
<img width="525" alt="image" src="https://github.com/user-attachments/assets/db9bfac7-a2fe-420f-8fd7-03f90bba9a2d" />
<br>
<img width="716" alt="image" src="https://github.com/user-attachments/assets/39a1cb05-a37b-4242-ba14-2580c2e19b6f" />
<Br>
<img width="716" alt="image" src="https://github.com/user-attachments/assets/ad2de0fa-8b68-43ce-9321-186bc035368b" />
<br>
<img width="723" alt="image" src="https://github.com/user-attachments/assets/76b3a372-f3e8-43c8-8add-15a6bab90c8b" />
<br>
<Br>
While working with fonts, I encountered several challenges. Initially, I used a font that I liked, but I soon noticed that the text overlapped, creating a visual issue. After consulting with my professor, I was advised that the problem might be related to the font itself or possibly an issue with the file.
Following this advice, I tried using the second font I had downloaded, and this time, everything worked perfectly without any issues. Through this experience, I learned that fonts come in various file formats, and if one file does not work as expected, trying a different format can be an effective solution.
By resolving this issue successfully, I was able to move on to the next stage of my project. This experience taught me the importance of preparing multiple font file formats and having backup options in case any issues arise.
<br>
<Br>
<img width="229" alt="image" src="https://github.com/user-attachments/assets/1715a259-a27e-459d-9fb7-f0a832a0f063" />
<br>
<Br>
I have used these in my interactive nonsense poem generator.

<img width="452" alt="image" src="https://github.com/user-attachments/assets/9b974902-9af6-4975-88e5-c02d07661c11" />

<img width="298" alt="image" src="https://github.com/user-attachments/assets/9044126f-559d-4671-a555-6ec05056327f" />

<img width="311" alt="image" src="https://github.com/user-attachments/assets/c68dc236-6551-459f-a354-a0105ed6cd2e" />
<Br>
<Br>
While working on this workshop, by using createInput() and createButton(), I learned again how to capture user input and process it upon button clicks. This experience allowed me to understand how to build interactive text-based programs and the importance of designing a user-friendly interface.
<br>
<Br>
Through this project, I learned how to use the textFont() and text() functions to display user input on the canvas. In particular, I gained a deeper understanding of layout design by adjusting the text positioning for better visual presentation.

Previously, I only used built-in fonts, but this time, I was able to experiment with custom fonts of my choice. This allowed me to explore more diverse design options and gave me the confidence to incorporate unique fonts in future projects to enhance creativity and personalization.
During the assignment, I encountered several spelling and bracket-related errors. However, through repeated experiences with these mistakes, I became quicker at identifying and resolving them, reinforcing the importance of careful and structured coding.

Additionally, I learned how to store user input in the poem array and update it whenever a new line is added. This process helped me understand the significance of dynamic data management using arrays, ensuring that user input is retained and displayed correctly on the screen.
Most importantly, creating the Nonsense Poem Generator allowed me to experience the excitement of the random() function once again. By randomly selecting words and modifying parts of the text, I discovered how to generate unpredictable and creative outcomes. This aspect of coding, where each input produces a unique result, was both fascinating and enjoyable, motivating me to explore further possibilities in creative coding.


## codes

<img width="347" alt="image" src="https://github.com/user-attachments/assets/71845f62-ce4e-4287-aa34-6b550e5c7867" />
<img width="349" alt="image" src="https://github.com/user-attachments/assets/9c23d3ce-6ee3-4c95-98fb-90fb3d11dcb8" />
<img width="345" alt="image" src="https://github.com/user-attachments/assets/9b00d40d-98a7-488e-8fe9-a3cb7ab6f5da" />
<img width="353" alt="image" src="https://github.com/user-attachments/assets/1df72832-5506-4172-ad51-240c7a5aba5a" />
<img width="101" alt="image" src="https://github.com/user-attachments/assets/52d5fb11-858e-4976-89eb-b8405f948a52" />
<img width="345" alt="image" src="https://github.com/user-attachments/assets/756698e8-dfa1-4da2-a214-bcd35abcef37" />



## Future Development

 I have observed that focusing on core functionality often leads to a lack of attention to design aspects in almost all workshops. While the Nonsense Poem Generator has the potential to bring joy and laughter to users, I realized that enhancing the background and design elements could create a more enjoyable and comfortable experience for them.
In terms of design, I am considering adding theme-based visuals and adjusting font styles to improve the overall aesthetic. For example, using fun colour combinations or applying animation effects to make the text gradually appear could significantly enhance the user experience.
Moreover, adding special effects for specific words could make the interaction even more engaging. For instance, changing colours or adding sound effects when certain words are generated would create a more dynamic and entertaining experience.
Looking ahead, I plan to explore more of RiTa's APIs and incorporate additional features. For example, I could experiment with sentence structure analysis to create visual rhythm or enrich poetic expressions by incorporating synonyms and related words. This could help evolve the project into a more creative and engaging generator.

## Reference / other sources that helped me

(font website)<br>
- https://www.jetbrains.com/lp/mono/<br>
- https://www.dafont.com/<Br>
<br>
