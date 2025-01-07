import {
  AWSSVG,
  BlenderSVG,
  CSSSVG,
  D3SVG,
  DockerSVG,
  FigmaSVG,
  GithubSVG,
  HTMLSVG,
  IllustratorSVG,
  JavaScriptSVG,
  MySQLSVG,
  NextJSSVG,
  NodeJSSVG,
  NotionSVG,
  PhotoshopSVG,
  ReactSVG,
  SassSVG,
  StyledComponentsSVG,
  ThreeJSSVG,
  TypeScriptSVG,
  ViteSVG,
} from "../../../public/svg/TechSkillSVG";

export interface Skill {
  icon: React.FC;
  name: string;
  description: string;
}

export const FrontendSkills: Skill[] = [
  { icon: HTMLSVG, name: "HTML", description: `설명<br/>` },
  { icon: CSSSVG, name: "CSS", description: `<br/>` },
  { icon: TypeScriptSVG, name: "TypeScript", description: `<br/> ` },
  { icon: NextJSSVG, name: "Next.JS", description: `<br/>` },
  { icon: ReactSVG, name: "React", description: `<br/>` },
  { icon: JavaScriptSVG, name: "JavaScript", description: `<br/>` },
  { icon: ViteSVG, name: "Vite", description: `<br/>` },
  { icon: StyledComponentsSVG, name: "StyledComponents", description: `<br/>` },
  { icon: ThreeJSSVG, name: "Three.JS", description: `<br/>` },
  { icon: SassSVG, name: "Sass", description: `<br/>` },
  { icon: D3SVG, name: "D3", description: `<br/>` },
];

export const BackendSkills: Skill[] = [
  { icon: MySQLSVG, name: "MySQL", description: `설명<br/>` },
  { icon: NodeJSSVG, name: "Node.JS", description: `설명<br/>` },
];

export const DevOpsSkills: Skill[] = [
  { icon: AWSSVG, name: "AWS", description: `설명<br/>` },
  { icon: DockerSVG, name: "Docker", description: `설명<br/>` },
];

export const DesignDocsSkills: Skill[] = [
  { icon: FigmaSVG, name: "Figma", description: `설명<br/>` },
  { icon: NotionSVG, name: "Notion", description: `설명<br/>` },
  { icon: IllustratorSVG, name: "Illujstrator", description: `설명<br/>` },
  { icon: PhotoshopSVG, name: "Photoshop", description: `설명<br/>` },
  { icon: BlenderSVG, name: "Blender", description: `설명<br/>` },
];
