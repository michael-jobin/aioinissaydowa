Testing various site generation features using Astro. Creating pages that showcase interviews and work areas, with data being dynamically fetched from JSON files.

This project is licensed privately. Unauthorized use of this code,images and texts is prohibited.

Stucture:

```
public
  └── assets
      └── images                        // images git ignored
src
  └── components                        // small components
      └── icons
          ├── Header.astro
          ...
  └── data                              // site data text content
      ├── areasList.json
      ├── companyProfile.json
      └── interviewsList.json
  └── layouts
  └── pages                             // pages
      ├── dei
      ├── humanresource-development
      ├── humanresource-management
      ├── interview
      └── index.astro
  └── sections                          // pages sections
      ├── areas
      ├── home
      └── interview
  └── styles
  └── types
  └── utils
```
