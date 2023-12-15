import {
  Tree,
  formatFiles,
  installPackagesTask,
  generateFiles,
} from '@nx/devkit';
import * as path from 'path';
import { ComponentGeneratorSchema } from './schema';


export default async function (host: Tree,  options: ComponentGeneratorSchema) {
  const projectRoot = `libs/ui/src/lib/components/${options.name}`;
  generateFiles(
    host, // The Tree (virtual file system) to generate files to
    path.join(__dirname, 'files'), // The path to the templates
    projectRoot, // Destination path
    options // Variables available to the templates
  )
  await formatFiles(host);
  return () => {
    installPackagesTask(host);
  };
}

