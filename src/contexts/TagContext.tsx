import {createContext, PropsWithChildren, useCallback} from 'react';

import useMap from '../hooks/useMap';

interface TagType {
   name: string;
   isActive: boolean;
   isTabGroup?: boolean;
}

type TagGroupType = Map<string, TagType>;
type TagsType = Map<string, TagGroupType>;

interface TagContextType {
   tags: TagsType;
   register: (
      name: string,
      groupId: string,
      defaultActive?: boolean,
      isTabGroup?: boolean,
   ) => void;
   handleClick: (name: string, groupId: string) => void;
   getActiveTags: () => TagGroupType;
}
export const TagContext = createContext({} as TagContextType);

const toggleTag = (tag: TagType) => ({...tag, isActive: !tag.isActive});

export const TagProvider = ({children}: PropsWithChildren) => {
   const tags = useMap<string, TagGroupType>([['global', new Map()]]);

   const register: TagContextType['register'] = useCallback(
      (name, groupId, defaultActive, isTabGroup) => {
         if (tags.get(groupId)?.has(name)) return;
         const tagsGroup = tags.get(groupId) ?? (new Map() as TagGroupType);

         tagsGroup.set(name, {
            name,
            isActive: !!defaultActive,
            isTabGroup,
         });

         tags.set(groupId, tagsGroup);
      },
      [tags],
   );

   const handleClick: TagContextType['handleClick'] = (
      clickedName,
      clickedGroupId,
   ) => {
      const tagsGroup = tags.get(clickedGroupId)!;
      const clickedTag = tagsGroup.get(clickedName)!;

      if (clickedTag.isTabGroup && clickedTag.isActive) return; // If it's a tab group so keep clicked active
      if (clickedGroupId !== 'global' && !clickedTag.isActive) {
         // If local group so deactivate another tag
         const activeTag = [...tagsGroup.values()].find(tag => tag.isActive);

         if (activeTag) tagsGroup.set(activeTag?.name, toggleTag(activeTag));
      }

      tagsGroup.set(clickedName, toggleTag(clickedTag));
      tags.set(clickedGroupId, tagsGroup);
   };

   const getActiveTags = () => {
      const activeTags = new Map() as TagGroupType;

      tags.forEach(group => {
         group.forEach((tag, name) => {
            if (tag.isActive) activeTags.set(name, tag);
         });
      });

      return activeTags;
   };

   return (
      <TagContext.Provider
         value={{
            tags,
            register,
            handleClick,
            getActiveTags,
         }}
      >
         {children}
      </TagContext.Provider>
   );
};
