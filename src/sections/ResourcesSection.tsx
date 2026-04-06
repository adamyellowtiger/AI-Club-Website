// Updated ResourcesSection.tsx

const resources = [ /* array of resources */ ];

const updatedResources = {
  ...resources,
  'revisit-sessions': resources.filter((item) => item.category === 'revisit-sessions')
};

export default updatedResources;
