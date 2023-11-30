import { PluginOption } from 'vite'
import Handlebars from 'handlebars'

export default function vitePluginHandlebarsPrecompile(): PluginOption {
    return {
        name: 'vite-plugin-handlebars-precompile',
        transform(code, id): { code: string } | undefined {
            if (id.endsWith('.hbs') || id.endsWith('.handlebars')) {
                return {
                    code: `
            import Handlebars from 'handlebars';
            export default Handlebars.template(${Handlebars.precompile(code)});
          `
                }
            }

            return
        }
    }
}
