import { parseFile } from '../parseFile';

describe('it can parase a file', () => {
    it('parses a header correctly', () => {
        const content = 'hello\n## Header {#hd}\n';
        const result = parseFile(content);
        expect(result).toMatchObject({
            levels: {'Header': 1},
            categories: {},
            competencies :{}
        });
    })

    it('parses multiple headers', () => {
        const content = '## H1 {#h1}\n## H2 {#h2}';
        const result = parseFile(content);
        expect(result).toMatchObject({
            levels: {
                'H1': 1,
                'H2': 1
            },
            categories: {},
            competencies: {}
        })
    })

    it('parses a category correctly', () => {
        const content = 'hello\n## Header {#hd}\n### Category \n';
        const result = parseFile(content);
        expect(result).toMatchObject({
            levels: {'Header': 1},
            categories: {'Category': 1},
            competencies :{}
        });
    })

    it('parses a competency correctly', () => {
        const content = 'hello\n## Header {#hd}\n### Category \n- Competency';
        const result = parseFile(content);
        expect(result).toMatchObject({
            levels: {'Header': 1},
            categories: {'Category': 1},
            competencies :{'Competency': {
                id: 'Competency',
                name: 'Competency',
                levels: ['Header'],
                category: 'Category'
            }}
        });
    })

    it('parses repeated competencies', () => {
        const content = 'hello\n## Header {#hd}\n### Category \n- Competency\n## Level 2 {#L2}\n### Category\n- Competency';
        const result = parseFile(content);
        expect(result).toMatchObject({
            levels: {'Header': 1, 'Level 2': 1},
            categories: {'Category': 2},
            competencies :{'Competency': {
                id: 'Competency',
                name: 'Competency',
                levels: ['Header', 'Level 2'],
                category: 'Category'
            }}
        });
    })

    it('can handle spaces', () => {
        const content = '## Header {#h}\n### With Space\n';
        const result = parseFile(content);
        expect(result).toMatchObject({
            levels: {'Header': 1},
            categories: {'With Space': 1},
            competencies : {}
        });

    })
})

describe('it does not overparse a file', () => {
    it('does not allow headers without IDs', () => {
        const content = 'hello\n## Header \n';
        const result = parseFile(content);
        expect(result).toMatchObject({
            levels: {},
            categories: {},
            competencies :{}
        });
    });

    it('does not parse a category if there was no level', () => {

    })
})