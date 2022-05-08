const name = (description: any) => {
  let final = '';

  final += `${description.description}`;
  final += '\n';
  final += '\n';

  final += '## Authentication';
  final += '\n';

  if (description.auth == 0) {
    final += '\`\`\`js';
    final += '\n';

    final += `const { auth } = require('osu-api-extended');`;
    final += '\n';
    final += '\n';

    final += '\`\`\`';
    final += '\n';

    final += '\`\`\`js';
    final += '\n';

    final += `await auth.login_lazer(username, password);`;
    final += '\n';

    final += '\`\`\`';
    final += '\n';
  };
  if (description.auth == 1) {
    final += '\`\`\`js';
    final += '\n';

    final += `const { auth } = require('osu-api-extended');`;
    final += '\n';
    final += '\n';

    final += '\`\`\`';
    final += '\n';

    final += '\`\`\`js';
    final += '\n';

    final += `await auth.login(client_id, client_secret);`;
    final += '\n';

    final += '\`\`\`';
    final += '\n';
  };
  final += '\n';

  final += '## Function';
  final += '\n';
  final += '\`\`\`js';
  final += '\n';

  final += `await ${description.title.split('E:\\coding\\npm\\wip\\osu-api-extended\\dist\\api\\').join('').split('\\routes').join('').split('.js').join('').split('\\').join('.')}()`;
  final += '\n';

  final += '\`\`\`';
  final += '\n';

  for (let i = 0; i < description.params.length; i++) {
    const d = description.params[i];

    if (i == 0) {
      final += '## Parameters';
      final += '\n';
      final += '\n';

      final += '| Parameter | Type | Description';
      final += '\n';
      final += '| --------- | ---- | -----------';
      final += '\n';
    };
    
    final += `| ${d.name} | \`\`${d.type}\`\` | ${d.description}`;
    final += '\n';
  };
  final += '\n';

  final += '## Response';
  final += '\n';

  final += '\`\`\`typescript';
  final += '\n';

  final += ``;
  final += '\n';

  final += '\`\`\`';
  final += '\n';

  return final;
  // if (description.method == 'POST') final += '# Body';
};

export default name;