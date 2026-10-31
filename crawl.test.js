const {normalizeurl}=require('./crawl.js');
const {test,expect}=require('@jest/globals');

test('normalizeurl to strip protocol',()=>{
    const input='https://www.youtube.com/watch/'
    const actual=normalizeurl(input)
    const expected='www.youtube.com/watch'
    expect(actual).toEqual(expected)
})