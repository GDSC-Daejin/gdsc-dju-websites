import { ContributorsType } from '../types/contributor';
import { projectData } from './projectData';
import { userData } from './userData';
const findContribute = (username: string) => {
  let result: string[] = [];
  projectData.map((data) =>
    data.members.map((name) =>
      name == username ? result.push(data.projectName) : null,
    ),
  );
  return result;
};

export const contributorsData: ContributorsType = [
  {
    name: userData.Jason.name,
    role: userData.Jason.role,
    profileImage: userData.Jason.profileImage,
    contributes: findContribute(userData.Jason.name),
  },
  {
    name: userData.Want.name,
    role: userData.Want.role,
    profileImage: userData.Want.profileImage,
    contributes: findContribute(userData.Want.name),
  },
  {
    name: userData.Harry.name,
    role: userData.Harry.role,
    profileImage: userData.Harry.profileImage,
    contributes: findContribute(userData.Harry.name),
  },
  {
    name: userData.Blaire.name,
    role: userData.Blaire.role,
    profileImage: userData.Blaire.profileImage,
    contributes: findContribute(userData.Blaire.name),
  },
  {
    name: userData.Rocoli.name,
    role: userData.Rocoli.role,
    profileImage: userData.Rocoli.profileImage,
    contributes: findContribute(userData.Rocoli.name),
  },
  {
    name: userData.Chois.name,
    role: userData.Chois.role,
    profileImage: userData.Chois.profileImage,
    contributes: findContribute(userData.Chois.name),
  },
  {
    name: userData.Gabi.name,
    role: userData.Gabi.role,
    profileImage: userData.Gabi.profileImage,
    contributes: findContribute(userData.Gabi.name),
  },
  {
    name: userData.Cindy.name,
    role: userData.Cindy.role,
    profileImage: userData.Cindy.profileImage,
    contributes: findContribute(userData.Cindy.name),
  },
  {
    name: userData.Gunzo.name,
    role: userData.Gunzo.role,
    profileImage: userData.Gunzo.profileImage,
    contributes: findContribute(userData.Gunzo.name),
  },
  {
    name: userData.Reese.name,
    role: userData.Reese.role,
    profileImage: userData.Reese.profileImage,
    contributes: findContribute(userData.Reese.name),
  },
  {
    name: userData.Marine.name,
    role: userData.Marine.role,
    profileImage: userData.Marine.profileImage,
    contributes: findContribute(userData.Marine.name),
  },
];
