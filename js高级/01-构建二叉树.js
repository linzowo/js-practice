// 使用原生js构建二叉树
/**
 * 功能包括：
 * 1. 创建二叉树实例
 * 2. 增加节点
 * 3. 删除节点
 * 4. 查找以某个值为根的节点
 * 5. 查找最大值节点
 * 6. 查找最小值节点
 * 7. 前中后序遍历
 */

/**
 * 节点构造函数
 */
class Node {
  constructor(key, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }
}

/**
 * 二叉树类
 */
class BinaryTree {
  constructor() {
    this.root = null;
  }

  /**
   * 插入节点
   * @param {*} key
   */
  insert(key) {
    let newNode = new Node(key);
    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (true) {
        if (key < current.key) {
          if (current.left) {
            current = current.left;
          } else {
            current.left = key;
            break;
          }
        } else if (key > current.key) {
          if (current.right) {
            current = current.right;
          } else {
            current.right = key;
            break;
          }
        }
      }
    }
  }

  /**
   * 获取最大节点值
   * @param {*} node
   */
  getMaxNode(node) {
    let node = node || this.root;
    while (node.right !== null) {
      node = node.right;
    }
    return node.key;
  }

  /**
   * 获取最小节点值
   * @param {*} node
   */
  getMinNode(node) {
    let node = node || this.root;
    while (node.left !== null) {
      node = node.left;
    }
    return node.key;
  }

  /**
   * 根据key查找指定节点
   * @param {*} key
   */
  find(key) {
    let node = this.root;
    while (node != null) {
      if (key < node.left) {
        node = node.left;
      } else if (key > node.right) {
        node = node.right;
      } else {
        return node;
      }
    }
    return null;
  }

  /**
   * 删除指定值的节点
   * @param {*} key
   */
  remove(key) {
    this.root = this.removeNode(this.root, key);
  }

  removeNode(node, key) {
    if (!node) {
      return null;
    }
    if (key < node.left) {
      node = this.removeNode(node.left, key);
      return node;
    } else if (key > node.right) {
      node = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left == null && node.right == null) {
        node = null;
        return node;
      } else if (node.left == null) {
        return node.right;
      } else if (node.right == null) {
        return node.left;
      } else {
        let minNode = this.getMinNode(node.right);
        node.key = minNode;
        node.right = this.removeNode(node.right, minNode);
        return node;
      }
    }
  }

  //   前序遍历
  prevSort(node = this.root, arr = []) {
    if (node) {
      arr.push(node.key);
      prevSort(node.left,arr);
      prevSort(node.right,arr);
    }
    return arr;
  }

  // 中序遍历
  centerSort(node = this.root, arr = []) {
    if (node) {
      prevSort(node.left,arr);
      arr.push(node.key);
      prevSort(node.right,arr);
    }
    return arr;
  }

  // 后序遍历
  nextSort(node = this.root, arr = []) {
    if (node) {
      prevSort(node.left,arr);
      prevSort(node.right,arr);
      arr.push(node.key);
    }
    return arr;
  }
}
