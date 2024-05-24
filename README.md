Testing various site generation features using Astro. Creating pages that showcase interviews and work areas, with data being dynamically fetched from JSON files.

This project is licensed privately. Unauthorized use of this code,images and texts is prohibited.

test server: https://data.ondo-inc.jp/humancapital/

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
  └── layouts                           // base template for every pages
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




page exemple:
<layout>
    <page>
        <section>
            <component />
        </section>
    </page>
</layout>

```
