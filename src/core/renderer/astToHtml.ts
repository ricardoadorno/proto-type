import { AstNode } from '../../types/astNode';
import { nodeToHtml } from './nodeRenderer';
import { RenderOptions } from '../../types/renderOptions';

/**
 * Convert AST to HTML string representation with pagination for in-app preview
 */
export function astToHtml(ast: AstNode | AstNode[], { currentScreen }: RenderOptions = {}): string {
  const screens = Array.isArray(ast) ? ast : [ast];
  
  if (screens.length === 0) return '';
  
  // Generate the HTML for all screens, with unique IDs and display:none (except currentScreen or first screen)
  const screensHtml = screens
    .filter(screen => screen && screen.type === 'Screen' && screen.name)
    .map((screen, index) => {
      const screenName = screen.name?.toLowerCase() || '';
      const style = currentScreen ? (screenName === currentScreen.toLowerCase() ? '' : 'style="display:none"')
      : (index === 0 ? '' : 'style="display:none"') 
      
      const elementsHtml = screen.elements
        ?.filter(element => element != null)
        .map(element => nodeToHtml(element))
        .join('\n      ') || '';
      
      return `
  <div id="${screenName}-screen" class="screen container ${screenName}" ${style}>
      ${elementsHtml}
  </div>`;
    })
    .join('\n\n');
  
  return `${screensHtml}`;
}

// Export the document renderer function
export { astToHtmlDocument } from './documentRenderer';