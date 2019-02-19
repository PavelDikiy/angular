export class CommentsModel {
  constructor(public body: string,
              public postId: number,
              public name: string,
              public id?: number) {
  }
}
