# Dexiesette

## Overview

This repo provides the boilerplate for building SvelteKit apps (_SSG or, with a couple tweaks, simple SPA_) that use IndexedDB (_wrapped in Dexie.js_) for efficient client-side data storage and retrieval. 

Specifically, it includes components for importing and exporting data as JSON files, as well as for clearing the database. It also provides an example of schema setup and flat-file usage (_search the repo for the "`CommonBook`" and "`common_book`" strings._)

## Goal

I built this because many of the apps I build for personal usage need to be performant and offline-capable, but also to persist complex data structures seamlessly. 

(_I often jump around FE frameworks, but have been enjoying SvelteKit quite a bit recently -- and the data-storage pattern itself can be pretty-straightforwardly [adapted to any.](https://dexie.org/docs/Tutorial/Getting-started)_)

## Reasoning

(_Thanks, Opus!_)

One of the key benefits of building personal software tools with local data storage is enhanced privacy and security. Since the data never leaves the user's device and is not transferred over a network, any user has complete control over their information. 

This approach eliminates the risks associated with transmitting sensitive data to remote servers and reduces the potential for data breaches or unauthorized access. 

Moreover, by keeping the data local, users can access and interact with their tools even in offline scenarios, providing a seamless and uninterrupted user experience.

## Usage

(_Thanks, Opus!_)

When starting a new project based on the `dexiesette` boilerplate repo, it's important to follow some best practices to ensure a clean and maintainable project structure:

**1. Clone the boilerplate repo:**
   ```
   git clone https://github.com/ypaulsussman/dexiesette.git new-project
   cd new-project
   ```

**2. Remove the existing Git history:**
   ```
   rm -rf .git
   ```

**3. Initialize a new Git repository:**
   ```
   git init
   ```

**4. Update the `package.json` file:**
   - Change the `name` field to your new project's name.
   - Update the `description`, `author`, and other relevant fields.
   - Remove or update any boilerplate-specific dependencies that aren't needed for your new project.

**5. Update the project's `README.md` file:**
   - Replace the boilerplate `README.md` content with information specific to your new project.
   - Provide an overview, installation instructions, usage guidelines, and any other relevant details.

**6. Update file contents:**
   - Go through the project files and update any references to the boilerplate name or specific configurations with your new project's details (_search the repo for the "`CommonBook`" and "`common_book`" strings._)
   - Remove or modify any boilerplate-specific code or comments that aren't relevant to your new project.

**7. Install dependencies:**
   ```
   npm install
   ```

**8. Set up a new remote repository:**
   - Create a new empty repository on your preferred Git hosting service.
   - Update the remote URL in your local Git repository:
     ```
     git remote add origin https://github.com/your-username/new-project.git
     ```

**9. Commit and push the changes:**
    ```
    git add .
    git commit -m "Initialize new project from dexiesette boilerplate"
    git push -u origin master
    ```
